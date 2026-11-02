# Prompt Scaffold — Task 1

Fill in every `[bracket]`, then paste the finished prompt into your approved AI tool.

## Before you paste: privacy check

- Open `ai/workshops_spring2026.csv` and **delete the `host_name` and `host_email` columns** from what you paste. Names and emails are personal information (PII), even when they're fake. No PII in prompts.
- Paste the data only. Don't paste the baseline summary; the AI shouldn't see the answer you'll grade it against.

## The scaffold

```text
ROLE: You are [who should the AI act as? e.g., a data analyst for a community nonprofit].

CONTEXT: The data below is [what it is and where it came from; use the
provenance note in baseline_summary.md]. Personal information has been removed.

TASK: Write a summary of this dataset for [who will read it] in [how long,
e.g., 120-180 words].

INCLUDE: [3-4 things the summary must cover, e.g., totals, best and worst results,
patterns, one recommendation]

RULES: [at least one rule, e.g., "Use only numbers you can calculate from the
data" or "Say so if something can't be determined from the data"]

FORMAT: [paragraphs? bullet points? a heading?]

DATA:
[paste the CSV rows here, without host_name and host_email]
```

## Tips

- One clear prompt is enough. If you re-prompt, copy **every** prompt and response into `ai/ai_output.md`.
- Write down the time you start prompting and the time you get a usable answer. You'll need it for the "time saved" criterion.
