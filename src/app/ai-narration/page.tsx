"use client";

import { useState } from "react";
import { SettingsSidebar } from "@/components/settings-sidebar";
import { WorkflowSteps } from "@/components/workflow-steps";

export default function AiNarrationPage() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  const [settings, setSettings] = useState<any>({});

  const toggleSettingsSidebar = () => setIsSettingsOpen(!isSettingsOpen);

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">AI 解说</h1>
        <p className="text-muted-foreground mb-6">
          上传视频后，系统将根据内容生成专业旁白。
        </p>
        <WorkflowSteps />
      </div>
      <SettingsSidebar
        isOpen={isSettingsOpen}
        onToggle={toggleSettingsSidebar}
        taskType="video_translation"
        onSettingsChange={setSettings}
      />
    </div>
  );
}
