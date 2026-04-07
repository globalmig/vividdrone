@AGENTS.md

# Token Efficiency Rules

## Response Style

- Be maximally concise. No preamble, no summaries, no filler.
- Never restate the user's request.
- Skip pleasantries and transitions ("Sure!", "Great question", "Let me...").
- Lead with the answer or action, not the reasoning.
- Omit trailing summaries ("I've completed...", "Here's what I did...").

## Code & File Operations

- Read only the specific lines needed, not entire files when avoidable.
- Do not read a file unless you actually need its content to proceed.
- Prefer targeted Grep/Glob over broad reads.
- Do not add comments, docstrings, or type annotations to code you didn't change.
- Do not add error handling for impossible scenarios.
- Do not refactor or clean up code beyond what was asked.

## Planning & Exploration

- Skip exploratory research when the answer is already known or derivable.
- Do not spawn subagents for tasks you can do inline in 1–3 tool calls.
- Do not use TodoWrite for simple single-step tasks.

## Output

- Prefer short inline answers over bullet lists when there's only one point.
- No markdown formatting unless it adds clarity (tables, code blocks are fine).
- File references use [file](path) format — no backtick wrapping.
