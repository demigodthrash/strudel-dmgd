// snippetsParser.mjs
export function parseSnippetsFile(content) {
  const snippets = [];
  // Pisahkan file berdasarkan batas snippet
  const snippetBlocks = content.split('// --').filter((block) => block.trim());

  for (let i = 0; i < snippetBlocks.length - 1; i += 2) {
    const headerBlock = snippetBlocks[i].trim();
    const contentBlock = snippetBlocks[i + 1].trim();

    // Ekstrak nama snippet dari header
    const keyMatch = headerBlock.match(/\/\/\s*key:\s*([^\n]+)/);
    if (keyMatch) {
      const name = keyMatch[1].trim();
      //   console.log('Found snippet:', name);
      snippets.push({
        name,
        content: contentBlock,
      });
    }
  }

  //   console.log('Total snippets found:', snippets.length);
  return snippets;
}
