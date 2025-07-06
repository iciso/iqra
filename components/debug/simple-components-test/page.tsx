"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SimpleComponentsTest() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Debug Components</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Test components here</p>
        </CardContent>
      </Card>
    </div>
  );
}
