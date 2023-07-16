"use client";
import { type FC } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.js",
	import.meta.url
).toString();

type PdfViewerProps = { file: string };

const PdfViewer: FC<PdfViewerProps> = (props) => {
	const { file } = props;

	return (
		<Document file={file}>
			<Page
				pageNumber={1}
				renderTextLayer={false}
				renderAnnotationLayer={false}
			/>
		</Document>
	);
};

export default PdfViewer;
