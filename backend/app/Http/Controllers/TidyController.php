<?php

namespace App\Http\Controllers;

use App\Models\Tidy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class TidyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tidies = DB::table('tidies')->join('projects','tidies.project_id','=','projects.id')->get();
        return response($tidies);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $tidies = $request->all();
        $validator = Validator::make($tidies,
           [ 'naam' => 'required|max:255', 'beschrijving' => 'max:255', 'project_id' => 'required|exists:projects,id']
        );

        if($validator->fails()){
            return response(['error' => $validator->errors()->all(), 'message' => 'Validation error']);
        } 

        $tidies = Tidy::create($tidies);

        return response(["message" => "Tidy created successfully"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $tidies = DB::table('tidies')->where('tidies.project_id',$id)->join('projects','tidies.project_id','=','projects.id')->get();
        return response($tidies);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
