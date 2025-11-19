#!/usr/bin/env node
// Minimal HTML pretty-printer: formats tags with indentation without altering text content.
// Usage: node scripts/format-html.js <input.html> <output.html>
import { readFileSync, writeFileSync } from 'fs';

const voidTags = new Set([
  'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'
]);

function isComment(token) { return /^<!--/.test(token); }
function isDoctype(token) { return /^<!DOCTYPE/i.test(token); }
function isStartTag(token) { return /^<([a-zA-Z][^\s/>]*)[^>]*>$/.test(token); }
function isEndTag(token) { return /^<\/[a-zA-Z][^>]*>$/.test(token); }
function isSelfClosing(token) { return /^<[^>]*\/>$/.test(token); }
function tagNameOf(token) {
  const m = token.match(/^<\/?\s*([a-zA-Z0-9:-]+)/);
  return m ? m[1].toLowerCase() : '';
}

function prettyPrint(html) {
  const tokens = html.split(/(<[^>]+>)/g).filter(t => t.length > 0);
  let indent = 0;
  const out = [];
  const ind = (n) => '  '.repeat(Math.max(0, n));
  let pendingText = '';

  function flushText() {
    if (pendingText.length === 0) return;
    // Preserve text as-is but trim only leading/trailing newlines
    const text = pendingText.replace(/^\n+|\n+$/g, '');
    if (text.trim().length === 0) {
      // whitespace-only text: emit a blank line to keep spacing
      out.push('');
    } else {
      // emit each line of text with current indent
      const lines = text.split(/\r?\n/);
      for (const line of lines) {
        out.push(ind(indent) + line);
      }
    }
    pendingText = '';
  }

  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    if (tok.startsWith('<')) {
      const tn = tagNameOf(tok);
      if (isComment(tok) || isDoctype(tok)) {
        flushText();
        out.push(ind(indent) + tok);
        continue;
      }
      if (isEndTag(tok)) {
        flushText();
        indent -= 1;
        out.push(ind(indent) + tok);
        continue;
      }
      if (isSelfClosing(tok) || voidTags.has(tn)) {
        flushText();
        out.push(ind(indent) + tok);
        continue;
      }
      // Start tag
      flushText();
      out.push(ind(indent) + tok);
      indent += 1;
      continue;
    } else {
      // text node
      // accumulate until next tag so we can indent as a block
      pendingText += tok;
    }
  }
  flushText();
  return out.join('\n').replace(/\s+$/g, '') + '\n';
}

function main() {
  const [,, input, output] = process.argv;
  if (!input || !output) {
    console.error('Usage: node scripts/format-html.js <input.html> <output.html>');
    process.exit(1);
  }
  const html = readFileSync(input, 'utf8');
  const formatted = prettyPrint(html);
  writeFileSync(output, formatted, 'utf8');
}

main();
