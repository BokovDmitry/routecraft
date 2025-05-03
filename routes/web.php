<?php

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    $index = public_path('index.html');

    if (!File::exists($index)) {
        abort(404);
    }

    return Response::file($index);
})->where('any', '.*');