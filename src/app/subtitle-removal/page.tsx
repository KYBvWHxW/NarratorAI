"use client";

import { useState } from "react";
import { SettingsSidebar } from "@/components/settings-sidebar";
import { WorkflowSteps } from "@/components/workflow-steps";

export default function SubtitleRemovalPage() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  const [settings, setSettings] = useState<any>({});

  const toggleSettingsSidebar = () => setIsSettingsOpen(!isSettingsOpen);

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">字幕擦除</h1>
        <p className="text-muted-foreground mb-6">
          上传带字幕的视频，使用 AI 尝试去除硬字幕。
        </p>
        <WorkflowSteps />
      </div>
      <SettingsSidebar
        isOpen={isSettingsOpen}
        onToggle={toggleSettingsSidebar}
        taskType="video_erasure"
        onSettingsChange={setSettings}
      />
    </div>
  );
}
