<?php

use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TidyController;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('project', [ProjectController::class, 'index']);
Route::post('project', [ProjectController::class, 'store']);
Route::get('tidy', [TidyController::class, 'index']);
Route::get('tidy/{id}', [TidyController::class, 'show']);
Route::post('tidy', [TidyController::class, 'store']);

// Route::get('/projects', function() {
//  return Project::all();
// });

// Route::post('project', function(Request $request){
//     return Project::create($request->all);
// });