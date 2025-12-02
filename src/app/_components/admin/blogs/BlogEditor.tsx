"use client";

import {
  Box,
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { MdArrowBack, MdSave, MdAdd, MdClose } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useRouter } from "next/navigation";
import { Blog, blogService } from "@/app/_services/blog-service";
import Image from "next/image";

interface BlogEditorProps {
  blogId?: string;
}

interface ImageUploadProps {
  imageUrl: string;
  onImageUpload: (url: string) => void;
}

function ImageUpload({ imageUrl, onImageUpload }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be smaller than 5MB");
      return;
    }

    setUploading(true);
    setError(null);

    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target?.result as string;
        onImageUpload(base64String);
      };
      reader.readAsDataURL(file);
      setError(null);

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      console.error("Upload error:", err);
      setError("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box sx={{ mb: 3 }}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        style={{ display: "none" }}
      />
      <Box
        onClick={() => !uploading && fileInputRef.current?.click()}
        sx={{
          position: "relative",
          width: "100%",
          height: 200,
          borderRadius: 2,
          overflow: "hidden",
          bgcolor: "#f5f5f5",
          cursor: uploading ? "default" : "pointer",
          border: "2px dashed #ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            bgcolor: uploading ? "#f5f5f5" : "#f0f0f0",
            borderColor: uploading ? "#ccc" : "#999",
          },
        }}
      >
        {uploading ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <CircularProgress size={40} />
            <Typography>Uploading...</Typography>
          </Box>
        ) : imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt="Blog header"
              fill
              style={{ objectFit: "cover" }}
            />
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                onImageUpload("");
              }}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                bgcolor: "rgba(0,0,0,0.5)",
                color: "white",
                "&:hover": {
                  bgcolor: "rgba(0,0,0,0.7)",
                },
              }}
            >
              <MdClose />
            </IconButton>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 1,
              pointerEvents: "none",
            }}
          >
            <MdAdd size={32} />
            <Typography>Click to upload image</Typography>
            <Typography variant="caption" sx={{ color: "#999" }}>
              PNG, JPG, GIF up to 5MB
            </Typography>
          </Box>
        )}
      </Box>
      {error && (
        <Typography sx={{ color: "#d32f2f", mt: 1, fontSize: "0.875rem" }}>
          {error}
        </Typography>
      )}
    </Box>
  );
}

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <Box sx={{ mb: 2, display: "flex", gap: 1 }}>
      <Button
        size="small"
        variant={editor.isActive("bold") ? "contained" : "outlined"}
        onClick={() => editor.chain().focus().toggleBold().run()}
        sx={{ minWidth: "auto" }}
      >
        B
      </Button>
      <Button
        size="small"
        variant={editor.isActive("italic") ? "contained" : "outlined"}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        sx={{ minWidth: "auto" }}
      >
        I
      </Button>
      <Button
        size="small"
        variant={
          editor.isActive("heading", { level: 1 }) ? "contained" : "outlined"
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        H1
      </Button>
      <Button
        size="small"
        variant={
          editor.isActive("heading", { level: 2 }) ? "contained" : "outlined"
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        H2
      </Button>
      <Button
        size="small"
        variant={editor.isActive("bulletList") ? "contained" : "outlined"}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        List
      </Button>
    </Box>
  );
};

export default function BlogEditor({ blogId }: BlogEditorProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [blog, setBlog] = useState<Partial<Blog>>({
    title: "",
    slug: "",
    status: "draft",
    content: "",
    imageUrl: "",
  });

  const editor = useEditor({
    extensions: [StarterKit],
    content: blog.content,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
  });

  useEffect(() => {
    if (blogId && blogId !== "new") {
      setLoading(true);
      blogService
        .getBlog(blogId)
        .then((data) => {
          if (data) {
            setBlog(data);
            editor?.commands.setContent(data.content || "");
          }
        })
        .finally(() => setLoading(false));
    }
  }, [blogId, editor]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setBlog((prev) => ({
      ...prev,
      title,
      slug: blogService.generateSlug(title),
    }));
  };

  const handleSave = async () => {
    if (!blog.title || !editor) {
      console.log("Validation failed:", { blog, editor });
      return;
    }

    const content = editor.getHTML();
    const blogData = {
      title: blog.title,
      content: content,
      slug: blog.slug || blogService.generateSlug(blog.title),
      status: blog.status || "draft",
      imageUrl: blog.imageUrl || "",
    };

    console.log("Attempting to save blog:", blogData);

    setSaving(true);
    try {
      if (blogId && blogId !== "new") {
        await blogService.updateBlog(blogId, blogData);
      } else {
        await blogService.createBlog(blogData);
      }
      router.push("/dashboard/blogs");
    } catch (error) {
      console.error("Error saving blog:", error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
            onClick={() => router.back()}
            sx={{
              color: "#1a1a1a",
              "&:hover": { bgcolor: "rgba(0,0,0,0.04)" },
            }}
          >
            <MdArrowBack />
          </IconButton>
          <Typography variant="h5" sx={{ fontWeight: 600, color: "#1a1a1a" }}>
            {blogId && blogId !== "new" ? "Edit Blog Post" : "New Blog Post"}
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={
            saving ? <CircularProgress size={20} color="inherit" /> : <MdSave />
          }
          onClick={handleSave}
          disabled={saving}
          sx={{
            bgcolor: "#1a1a1a",
            "&:hover": {
              bgcolor: "#333",
            },
          }}
        >
          {saving ? "Saving..." : "Save"}
        </Button>
      </Box>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 2,
          bgcolor: "white",
          mb: 3,
        }}
      >
        <Box sx={{ display: "flex", gap: 2, mb: 3, flexDirection: "column" }}>
          <ImageUpload
            imageUrl={blog.imageUrl || ""}
            onImageUpload={(url) =>
              setBlog((prev) => ({ ...prev, imageUrl: url }))
            }
          />
          <TextField
            fullWidth
            label="Title"
            value={blog.title}
            onChange={handleTitleChange}
          />
          <TextField
            fullWidth
            label="URL Slug"
            value={blog.slug}
            onChange={(e) =>
              setBlog((prev) => ({ ...prev, slug: e.target.value }))
            }
            helperText="This will be the URL of your blog post"
          />
          <FormControl>
            <InputLabel>Status</InputLabel>
            <Select
              value={blog.status}
              label="Status"
              onChange={(e) =>
                setBlog((prev) => ({
                  ...prev,
                  status: e.target.value as "draft" | "published",
                }))
              }
            >
              <MenuItem value="draft">Draft</MenuItem>
              <MenuItem value="published">Published</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            border: "1px solid #e0e0e0",
            borderRadius: 1,
            p: 2,
            minHeight: 400,
            "& .ProseMirror": {
              minHeight: 300,
              outline: "none",
            },
          }}
        >
          <MenuBar editor={editor} />
          <EditorContent editor={editor} />
        </Box>
      </Paper>
    </>
  );
}
