import dirImg from './iconsImg/folder-fill.svg'
import HEICImg from './iconsImg/heic.png'
import enother from './iconsImg/file-unknow-fill.svg'
import PDFImg from './iconsImg/PDF.svg'
import JPGImg from './iconsImg/JPG.svg'
import AIImg from './iconsImg/AI.svg'
import AVIImg from './iconsImg/AVI.svg'
import BMPImg from './iconsImg/BMP.svg'
import CRDImg from './iconsImg/CRD.svg'
import CSVImg from './iconsImg/CSV.svg'
import DLLImg from './iconsImg/DLL.svg'
import DOCImg from './iconsImg/DOC.svg'
import DOCXImg from './iconsImg/DOCX.svg'
import DWGImg from './iconsImg/DWG.svg'
import EPSImg from './iconsImg/EPS.svg'
import EXEImg from './iconsImg/EXE.svg'
import FLVImg from './iconsImg/FLV.svg'
import GIFFImg from './iconsImg/GIFF.svg'
import HTMLImg from './iconsImg/HTML.svg'
import ISOImg from './iconsImg/ISO.svg'
import JAVAImg from './iconsImg/JAVA.svg'
import MDBImg from './iconsImg/MDB.svg'
import MIDImg from './iconsImg/MID.svg'
import MOVImg from './iconsImg/MOV.svg'
import MP3Img from './iconsImg/MP3.svg'
import MP4Img from './iconsImg/MP4.svg'
import MPEGImg from './iconsImg/MPEG.svg'
import PNGImg from './iconsImg/PNG.svg'
import PPTImg from './iconsImg/PPT.svg'
import PSImg from './iconsImg/PS.svg'
import PSDImg from './iconsImg/PSD.svg'
import PUBImg from './iconsImg/PUB.svg'
import RARImg from './iconsImg/RAR.svg'
import RAWImg from './iconsImg/RAW.svg'
import RSSImg from './iconsImg/RSS.svg'
import SVGImg from './iconsImg/SVG.svg'
import TIFFImg from './iconsImg/TIFF.svg'
import TXTImg from './iconsImg/TXT.svg'
import WAVImg from './iconsImg/WAV.svg'
import WMAImg from './iconsImg/WMA.svg'
import XMLImg from './iconsImg/XML.svg'
import XSLImg from './iconsImg/XSL.svg'
import ZIPImg from './iconsImg/ZIP.svg'
export default (expansion) => {
	const fileTypes = {
			"jpg": "https://picsum.photos/id/237/200/300",
			"png": "https://picsum.photos/id/237/200/300",
			'pdf': PDFImg,
			"dir": dirImg,
			"mp4": MP4Img,
			"jpg": JPGImg,
			"aii": AIImg,
			"avii": AVIImg,
			"bmp":  BMPImg,
			"crd": CRDImg,
			"cvs": CSVImg,
			"dll": DLLImg,
			"doc": DOCImg,
			"docx": DOCXImg,
			"dwg": DWGImg,
			"eps": EPSImg,
			"exe": EXEImg,
			"flx": FLVImg,
			"giff": GIFFImg,
			"html": HTMLImg,
			"iso": ISOImg,
			"java": JAVAImg,
			"mdb": MDBImg,
			"mid": MIDImg,
			"mov": MOVImg,
			"mp3": MP3Img,
			"mpeg": MPEGImg,
			"png": PNGImg,
			"ppt": PPTImg,
			"psi": PSImg,
			"psd": PSDImg,
			"pub": PUBImg,
			"rar": RARImg,
			"raw": RAWImg,
			"rss": RSSImg,
			"svg": SVGImg,
			"tiff": TIFFImg,
			"txt": TXTImg,
			"wav": WAVImg,
			"wma": WMAImg,
			"xml": XMLImg,
			"xsl": XSLImg,
			"zip": ZIPImg,
			"HEIC": HEICImg,
	};

	return fileTypes[expansion] || enother;
}
	// if(expansion === ".jpg" || ".png") {
	// 		console.log(expansion)
	// 		return <img src="https://picsum.photos/id/237/200/300" alt="" />
	// }
	// if(expansion === "dir") {
	// 	console.log(expansion)
	// 	return <img src="https://picsum.photos/seed/picsum/200/300" alt="" /> 
	// }
	// console.log(expansion)
	// // return <img  src="https://picsum.photos/id/237/200/300" alt="" /> 
