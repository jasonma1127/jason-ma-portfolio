module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // 新功能
        'fix',      // 修復 bug
        'docs',     // 文件變更
        'style',    // 格式化（不影響程式碼運行的變更）
        'refactor', // 重構（既非新增功能，也非修復bug的程式碼變更）
        'perf',     // 性能優化
        'test',     // 增加測試
        'build',    // 構建系統或外部依賴項的變更
        'ci',       // CI 配置檔案和腳本的變更
        'chore',    // 其他不修改src或test檔案的變更
        'revert',   // 回退之前的 commit
      ],
    ],
  },
};
