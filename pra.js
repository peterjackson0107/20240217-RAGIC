// 處理選項變化
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('change', () => {
    updateSelection();
  });
});

// 更新已選擇的選項
function updateSelection() {
  const selectedOptions = Array.from(document.querySelectorAll('.dropdown-item:checked')).map(item => item.parentNode.textContent.trim());
  const selectedOptionsDiv = document.getElementById('selectedOptions');
  console.log("已選擇的選項:", selectedOptions);
  selectedOptionsDiv.innerText = "你選的選項是：" + selectedOptions.join(', '); // 將所選擇的選項以逗號分隔的形式顯示
}

