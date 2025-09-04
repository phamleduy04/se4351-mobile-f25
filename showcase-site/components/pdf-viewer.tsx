"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, ZoomIn, ZoomOut } from "lucide-react"

export function PDFViewer() {
  const [zoom, setZoom] = useState(100)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Product Documentation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border border-border rounded-lg overflow-hidden" style={{ height: "600px" }}>
          <iframe
            src="/projectplan.pdf"
            width="100%"
            height="100%"
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top left" }}
            className="border-0"
            title="Product Documentation PDF"
          />
        </div>
      </CardContent>
    </Card>
  )
}
