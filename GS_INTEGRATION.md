# Panduan Integrasi Google Sheets - SDN KEJURON

Dokumen ini berisi instruksi lengkap untuk menghubungkan formulir **Kritik & Saran** dan **PPDB Online** di website SDN KEJURON dengan **Google Spreadsheet** Anda.

## 1. Persiapan Spreadsheet

1.  Buat **Google Sheet** (Spreadsheet) baru.
2.  Beri nama judul Spreadsheet tersebut, misalnya: `Data SDN KEJURON`.
3.  Buka menu **Extensions > Apps Script**.

## 2. Pemasangan Script

1.  Hapus semua kode yang ada di dalam editor Apps Script (teks `function myFunction() { ... }`).
2.  Salin seluruh kode di bawah ini (dari baris `/**` hingga akhir) dan tempelkan ke editor.

> **PENTING:** Hanya salin teks kodenya saja. Jangan ikut menyalin simbol backticks (```) jika Anda menyalin dari panduan ini.

```javascript
/**
 * SDN KEJURON - Form Integration Script
 * Handles Feedback and PPDB Registration
 * 
 * INSTRUCTIONS:
 * 1. Paste this code into Apps Script editor (delete everything there first).
 * 2. Run the 'initializeSpreadsheet' function once to create headers automatically.
 * 3. Deploy as Web App (Execute as: Me, Access: Anyone).
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var type = data.formType; // 'feedback' or 'ppdb'
    var sheetName = type === 'ppdb' ? 'PPDB' : 'Feedback';
    
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName);
    
    // Auto-create sheet if missing
    if (!sheet) {
      initializeSpreadsheet();
      sheet = ss.getSheetByName(sheetName);
    }
    
    var timestamp = new Date();
    var rowData = [];
    
    if (type === 'ppdb') {
      rowData = [
        timestamp,
        data.childName,
        data.pob,
        data.dob,
        data.parentName,
        data.whatsapp,
        data.email
      ];
    } else {
      rowData = [
        timestamp,
        data.name || 'Anonim',
        data.email || 'N/A',
        data.message
      ];
    }
    
    sheet.appendRow(rowData);
    
    // Set timestamp format for the new row
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1).setNumberFormat("dd/MM/yyyy HH:mm:ss");
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Membuat tab dan kolom header secara otomatis.
 * Jalankan fungsi ini satu kali secara manual.
 */
function initializeSpreadsheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Setup Feedback Sheet
  var feedbackSheet = ss.getSheetByName('Feedback');
  if (!feedbackSheet) {
    feedbackSheet = ss.insertSheet('Feedback');
    var headers = [['Timestamp', 'Nama Pengirim', 'Email', 'Pesan']];
    feedbackSheet.getRange(1, 1, 1, headers[0].length).setValues(headers)
      .setBackground('#10b981').setFontColor('#ffffff').setFontWeight('bold');
    feedbackSheet.setFrozenRows(1);
  }
  
  // Setup PPDB Sheet
  var ppdbSheet = ss.getSheetByName('PPDB');
  if (!ppdbSheet) {
    ppdbSheet = ss.insertSheet('PPDB');
    var headers = [['Timestamp', 'Nama Siswa', 'Tempat Lahir', 'Tgl Lahir', 'Nama Wali', 'WhatsApp', 'Email']];
    ppdbSheet.getRange(1, 1, 1, headers[0].length).setValues(headers)
      .setBackground('#3b82f6').setFontColor('#ffffff').setFontWeight('bold');
    ppdbSheet.setFrozenRows(1);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("SDN KEJURON Integration Endpoint Active.");
}
```

## 3. Inisialisasi dan Deployment

1.  Klik ikon **Save** (Disket) dan beri nama proyek, misalnya `Script SDN KEJURON`.
2.  Di bagian menu atas (sebelah tombol bug), pilih fungsi **`initializeSpreadsheet`**.
3.  Klik tombol **Run**.
4.  Akan muncul permintaan izin (**Review Permissions**). Klik **Allow/Izinkan** (Anda mungkin perlu klik 'Advanced' -> 'Go to Script SDN KEJURON').
5.  Setelah selesai, klik tombol **Deploy > New Deployment**.
6.  Pilih jenis: **Web App**.
    *   **Description**: Versi 1
    *   **Execute As**: Me (email Anda)
    *   **Who has access**: **Anyone** (Ini wajib agar publik bisa mengirim data)
7.  Klik **Deploy** dan Salin **Web App URL** yang muncul.

## 4. Konfigurasi di AI Studio

1.  Buka aplikasi Anda di AI Studio Build.
2.  Buka menu **Settings** (Ikon Gerigi) > **Secrets**.
3.  Tambahkan Secret baru:
    *   **Key**: `VITE_WEBHOOK_URL`
    *   **Value**: (Paste URL yang Anda salin tadi)
4.  Klik **Save**.

## Troubleshooting (Jika Error)

| Masalah | Solusi |
| :--- | :--- |
| **SyntaxError: Invalid or unexpected token** | Jangan ikut menyalin simbol \`\`\` (triple backtick) ke Apps Script. Hapus baris pertama dan terakhir yang bukan kode JavaScript. |
| **Data tidak masuk tapi pesan Sukses** | Pastikan Anda sudah menjalankan fungsi `initializeSpreadsheet` satu kali untuk membuat tab sheet yang benar. |
| **Error: CORS atau Access Denied** | Saat Deploy, pastikan 'Who has access' diatur ke **Anyone**, bukan 'Anyone with Google account'. |
