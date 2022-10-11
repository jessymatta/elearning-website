<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('assignments', function (Blueprint $table) {
            $table->id();
            $table->string('crn');
            $table->string('description');
            $table->string('due_date');
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('assignments');
    }
};
