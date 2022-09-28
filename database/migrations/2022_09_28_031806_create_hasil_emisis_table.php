<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hasil_emisis', function (Blueprint $table) {
            $table->id();
            $table->decimal('welding',$precision=30,$scale=3);
            $table->decimal('painting',$precision=30,$scale=3);
            $table->decimal('assy',$precision=30,$scale=3);
            $table->decimal('press',$precision=30,$scale=3);
            $table->decimal('total',$precision=30,$scale=3);
            $table->date('tanggal');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hasil_emisis');
    }
};
