"use client";

import { useState } from "react";
import { SettingsSidebar } from "@/components/settings-sidebar";
import { WorkflowSteps } from "@/components/workflow-steps";

export default function SubtitleExtractionPage() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  const [settings, setSettings] = useState<any>({});

  const toggleSettingsSidebar = () => setIsSettingsOpen(!isSettingsOpen);

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">字幕提取</h1>
        <p className="text-muted-foreground mb-6">
          上传视频文件，自动识别并生成字幕文件。
        </p>
        <WorkflowSteps />
      </div>
      <SettingsSidebar
        isOpen={isSettingsOpen}
        onToggle={toggleSettingsSidebar}
        taskType="video_extraction"
        onSettingsChange={setSettings}
      />
    </div>
  );
}
