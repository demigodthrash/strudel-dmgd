import { parseSnippetsFile } from './snippetsParser.mjs';

export async function loadSnippets(path = '/snippets.sps') {
  try {
    // console.log('Attempting to load snippets from:', path);
    const response = await fetch(path);
    if (!response.ok) {
      //   console.error('Failed to load snippets:', response.statusText);
      return [];
    }
    const content = await response.text();
    // console.log('Snippets content loaded:', content.substring(0, 100) + '...');
    const snippets = parseSnippetsFile(content);
    // console.log('Parsed snippets:', snippets);
    return snippets;
  } catch (error) {
    // console.error('Error loading snippets:', error);
    return [];
  }
}
