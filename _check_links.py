import re, json, os, glob, sys

root = os.path.dirname(os.path.abspath(__file__))
files = glob.glob(os.path.join(root, '**', 'index.html'), recursive=True)
files = [f for f in files if 'node_modules' not in f]

all_paths = set()
for f in files:
    rel = os.path.relpath(f, root).replace('\\', '/')
    if rel == 'index.html':
        all_paths.add('/')
    else:
        all_paths.add('/' + rel[:-len('index.html')].rstrip('/'))

errors = []
dummy_patterns = [
    r'lorem ipsum', r'sample time slot', r'10:00 AM', r'11:30 AM', r'placeholder text',
    r'TODO', r'FIXME', r'John Doe', r'Jane Doe', r'test@test',
]
for f in files:
    with open(f, encoding='utf-8') as fh:
        content = fh.read()
    hrefs = re.findall(r'href="(/[^"#]*)"', content)
    for h in hrefs:
        h2 = h.rstrip('/')
        if h2 == '':
            h2 = '/'
        if h2 not in all_paths and not h2.startswith('/images') and not h2.endswith(('.xml', '.txt', '.webp', '.png', '.jpg')):
            errors.append(f'{f}: broken link {h}')
    for m in re.finditer(r'<script type="application/ld\+json">(.*?)</script>', content, re.S):
        try:
            json.loads(m.group(1))
        except Exception as e:
            errors.append(f'{f}: invalid JSON-LD: {e}')
    for pat in dummy_patterns:
        if re.search(pat, content, re.I):
            errors.append(f'{f}: possible dummy content matching /{pat}/')

if errors:
    print(f'{len(errors)} issues found:')
    for e in errors:
        print(' -', e)
    sys.exit(1)
else:
    print(f'OK: checked {len(files)} files, no broken internal links, valid JSON-LD, no dummy-content patterns found.')
