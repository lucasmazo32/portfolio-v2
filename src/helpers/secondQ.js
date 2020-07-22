export default function secondQ(check, looking, ans) {
  const diff = [];
  looking.forEach((element) => {
    if (!check.includes(element)) {
      diff.push(element);
    }
  });
  if (diff.length === 0) {
    return {
      text: ans[0],
      tech: null,
      now: 'next',
    };
  }
  return { text: ans[1], tech: diff, now: 'next' };
}
