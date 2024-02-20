// 處理選項變化
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('change', () => {
    updateSelection();
  });
});

// 更新已選擇的選項
function updateSelection() {
  const selectedOptions = Array.from(document.querySelectorAll('.dropdown-item:checked')).map(item => item.parentNode.textContent.trim());
  const button = document.querySelector('.dropdown-toggle.btn');
  
  if (selectedOptions.length === 0) {
    button.innerText = '請選擇';
  } else {
    button.innerText = selectedOptions.join(', ');
  }
  console.log(selectedOptions);
}