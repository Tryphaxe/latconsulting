import formidable from 'formidable';
import path from 'path';
import { Readable } from 'stream';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function parseForm(request) {
  const form = formidable({
    uploadDir: path.join(process.cwd(), '/public/uploads'),
    keepExtensions: true,
    filename: (name, ext, part) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      return `${part.originalFilename.split('.')[0]}-${uniqueSuffix}${ext}`;
    },
  });

  // 🟡 Convertir le body Web en stream Node.js
  const stream = Readable.fromWeb(request.body);

  // 🟢 Extraire les headers en objet simple
  const headers = {};
  request.headers.forEach((value, key) => {
    headers[key.toLowerCase()] = value;
  });

  return new Promise((resolve, reject) => {
    form.parse(stream, { headers }, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}