// Copy to clipboard behavior with toast feedback
const copyBtn = document.getElementById('copyBtn');
const refId = document.getElementById('refId');
const toast = document.getElementById('toast');

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1700);
}

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(refId.textContent.trim());
    showToast('추천인 ID가 복사되었습니다');
  } catch (e) {
    // Fallback
    const range = document.createRange();
    range.selectNode(refId);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    try {
      document.execCommand('copy');
      selection.removeAllRanges();
      showToast('추천인 ID가 복사되었습니다');
    } catch (err) {
      showToast('복사에 실패했습니다');
    }
  }
});
