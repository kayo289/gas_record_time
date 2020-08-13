function doGet() {
  // 表示したいHTMLのファイル名を指定(拡張子は不要)
  return HtmlService.createTemplateFromFile("index").evaluate();
}

function logTest(){
    var ctime = new Date();
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    var lastRow = sheet.getLastRow();
    
    sheet.getRange(lastRow + 1, 1).setValue(String(ctime));
    Logger.log(ctime);
}