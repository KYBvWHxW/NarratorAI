"use client";

import { useState } from "react";
import { SettingsSidebar } from "@/components/settings-sidebar";
import { WorkflowSteps } from "@/components/workflow-steps";

export default function VideoEmbeddingPage() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  const [settings, setSettings] = useState<any>({});

  const toggleSettingsSidebar = () => setIsSettingsOpen(!isSettingsOpen);

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">视频压制</h1>
        <p className="text-muted-foreground mb-6">
          上传视频及字幕文件，选择样式后压制生成新视频。
        </p>
        <WorkflowSteps />
      </div>
      <SettingsSidebar
        isOpen={isSettingsOpen}
        onToggle={toggleSettingsSidebar}
        taskType="video_merging"
        onSettingsChange={setSettings}
      />
    </div>
  );
}
