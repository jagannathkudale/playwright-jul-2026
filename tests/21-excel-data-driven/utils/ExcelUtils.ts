import * as XLSX from 'xlsx';

export class ExcelUtils {

  static readExcel(filePath: string) {

    const workbook =
      XLSX.readFile(filePath);

    const sheetName =
      workbook.SheetNames[0];

    const worksheet =
      workbook.Sheets[sheetName];

    return XLSX.utils.sheet_to_json(
      worksheet
    );

  }

}