/**
 * SDN KEJURON - Form Integration Script (Google Sheets + Email Alert)
 */

var ADMIN_EMAIL = "sdnkejuron13@gmail.com";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var type = data.formType; 
    var sheetName = type === 'ppdb' ? 'PPDB' : 'Saran & Kritik';
    
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName);
    
    // Otomatis membuat sheet & header jika belum ada
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      if (type === 'ppdb') {
        var headers = [['Timestamp', 'Nama Siswa', 'Tempat Lahir', 'Tgl Lahir', 'Nama Wali', 'WhatsApp', 'Email']];
        sheet.getRange(1, 1, 1, headers[0].length).setValues(headers).setBackground('#3b82f6').setFontColor('#ffffff').setFontWeight('bold');
      } else {
        var headers = [['Timestamp', 'Nama Pengirim', 'Email', 'Pesan']];
        sheet.getRange(1, 1, 1, headers[0].length).setValues(headers).setBackground('#10b981').setFontColor('#ffffff').setFontWeight('bold');
      }
      sheet.setFrozenRows(1);
    }
    
    var timestamp = new Date();
    var rowData = [];
    var emailSubject = "";
    var emailBody = "";
    
    // Memilah data dan menyusun Email
    if (type === 'ppdb') {
      rowData = [timestamp, data.childName, data.pob, data.dob, data.parentName, data.whatsapp, data.email];
      
      emailSubject = "🎉 Pendaftaran PPDB Baru: " + data.childName;
      emailBody = "Halo Admin SDN Kejuron,\n\nAda pendaftaran PPDB baru dari website:\n\n" +
                  "Nama Anak    : " + data.childName + "\n" +
                  "Tempat Lahir : " + data.pob + "\n" +
                  "Tanggal Lahir: " + data.dob + "\n" +
                  "Nama Wali    : " + data.parentName + "\n" +
                  "WhatsApp     : " + data.whatsapp + "\n" +
                  "Email        : " + data.email + "\n\n" +
                  "Silakan cek Google Spreadsheet untuk selengkapnya.\n\n- Sistem Website SDN Kejuron";
    } else {
      var senderName = data.name || 'Anonim';
      var senderEmail = data.email || 'Tidak dicantumkan';
      
      rowData = [timestamp, senderName, senderEmail, data.message];
      
      emailSubject = "📬 Saran & Kritik Baru dari: " + senderName;
      emailBody = "Halo Admin SDN Kejuron,\n\nAda pesan baru dari website:\n\n" +
                  "Nama  : " + senderName + "\n" +
                  "Email : " + senderEmail + "\n" +
                  "Pesan :\n" + data.message + "\n\n- Sistem Website SDN Kejuron";
    }
    
    // Simpan ke Spreadsheet
    sheet.appendRow(rowData);
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1).setNumberFormat("dd/MM/yyyy HH:mm:ss");
    
    // Kirim Email Notifikasi
    MailApp.sendEmail(ADMIN_EMAIL, emailSubject, emailBody);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Endpoint status
function doGet(e) {
  return ContentService.createTextOutput("Sistem Integrasi SDN KEJURON Aktif.");
}
