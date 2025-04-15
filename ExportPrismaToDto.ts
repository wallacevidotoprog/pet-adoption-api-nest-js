import * as fs from 'fs';
import * as path from 'path';

const outputDir = __dirname+'/output';
console.log('outputDir',outputDir);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}



const prismaToTsType = (type: string): string => {
  switch (type) {
    case 'String':
      return 'string';
    case 'Int':
      return 'number';
    case 'Boolean':
      return 'boolean';
    case 'DateTime':
      return 'Date';
    case 'Float':
      return 'number';
    default:
      return type;
  }
};

const schemaPath = path.resolve(__dirname, 'prisma/schema.prisma');
const schema = fs.readFileSync(schemaPath, 'utf-8');

const modelRegex = /model (\w+) \{([^}]+)\}/g;
const fieldRegex = /^\s*(\w+)\s+([\w\[\]]+).*$/gm;

let match;
while ((match = modelRegex.exec(schema)) !== null) {
  const modelName = match[1];
  const modelBody = match[2];

  const fields: { name: string; type: string }[] = [];

  let fieldMatch;
  while ((fieldMatch = fieldRegex.exec(modelBody)) !== null) {
    const [, name, type] = fieldMatch;

    fields.push({ name, type });
  }

  const classCode = `
export class ${modelName}Dto {
${fields.map((f) => `  ${f.name}: ${prismaToTsType(f.type)};`).join('\n')}
}
`.trim();

  const outputPath = path.resolve(__dirname, `output/${modelName}Dto.ts`);
  fs.writeFileSync(outputPath, classCode);
  console.log(`✅ Gerado: ${modelName}Dto.ts`);
}
