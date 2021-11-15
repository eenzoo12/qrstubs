<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Imports\CreditsImport;
use App\Imports\UsersImport;

class ImportController extends Controller
{
    public function importUser(Request $req)
    {
        (new UsersImport)->import('Idno.xlsx', 'local', \Maatwebsite\Excel\Excel::XLSX);
    }
    public function importCredit(Request $req)
    {
        $req->validate([
            'userImportFile' => 'required|mimes:xlsx,xls'
        ]);

        //Upload
        if($req->hasFile('userImportFile')) {
            // Get filename with extension
            $filenameWithExt = $req->file('userImportFile')->getClientOriginalName();
            // Get just filename
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            // Get just ext
            $extension = $req->file('userImportFile')->getClientOriginalExtension();
            //Filename to store
            $fileNameToStore = $filename.'_'.Date('Ymd_His').'.'.$extension;
            // Upload Image
            //$path = $req->file('userImportFile')->storeAs('public/credit', $fileNameToStore);
        }

        (new CreditsImport($filename))->import($req->file('userImportFile'));
        $path = $req->file('userImportFile')->storeAs('public/credit', $fileNameToStore);
        return [
            'status' => 1,
            'result' => "Data successfully uploaded."
        ];
    }
}
