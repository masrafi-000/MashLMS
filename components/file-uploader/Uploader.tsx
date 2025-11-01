"use client";

import { cn } from "@/lib/utils";
import { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { v4 as uuid } from "uuid";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { RenderEmptyState } from "./RenderState";

interface UploaderState {
  id: string | null;
  file: File | null;
  uploading: boolean;
  progress: number;
  key?: string;
  isDeleting: boolean;
  error: boolean;
  objectUrl?: string;
  fileType: "image" | "video";
}

export function Uploader() {
  const [fileState, setFileState] = useState<UploaderState>({
    error: false,
    file: null,
    id: null,
    uploading: false,
    progress: 0,
    isDeleting: false,
    fileType: "image",
  });

  function uploadFile(file: File) {
    setFileState((prev) => ({
      ...prev,
      uploading: true,
      progress: 0,
    }));

    try {
    } catch {}
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];

      setFileState({
        file: file,
        uploading: false,
        progress: 0,
        objectUrl: URL.createObjectURL(file),
        error: false,
        id: uuid(),
        isDeleting: false,
        fileType: "image",
      });
    }
  }, []);

  function rejectedFiles(fielRejection: FileRejection[]) {
    if (fielRejection.length) {
      const toomanyFiles = fielRejection.find(
        (rejection) => rejection.errors[0].code === "too-many-files"
      );

      const fileSizeToBig = fielRejection.find(
        (rejection) => rejection.errors[0].code === "file-too-large"
      );

      if (fileSizeToBig) {
        toast.error("File size exceeds the limit!");
      }

      if (toomanyFiles) {
        toast.error("Too many files selected, max is 1");
      }
    }
  }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
    multiple: false,
    maxSize: 5 * 1024 * 1024, // 5mb
    onDropRejected: rejectedFiles,
  });

  return (
    <Card
      {...getRootProps()}
      className={cn(
        "relative border-2 border-dashed transition-colors duration-200 ease-in-out w-full h-64",
        isDragActive
          ? "border-primary bg-primary/10 border-solid"
          : "border-border hover:border-primary"
      )}
    >
      <CardContent className="flex items-center justify-center h-full w-full p-4">
        <Input {...getInputProps()} />
        <RenderEmptyState isDragActive={isDragActive} />
      </CardContent>
    </Card>
  );
}
