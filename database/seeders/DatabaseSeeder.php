<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Emisi;
use App\Models\Plant;
use App\Models\Product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $plant = [
            [
                'plant' => 'Plant 1',
            ],
            [
                'plant' => 'Plant 2',
            ],
            [
                'plant' => 'Plant 3',
            ],
        ];
        $emisi = [
            [
                'emission' => 'Electricity',
            ],
            [
                'emission' => 'Fuel',
            ],
            [
                'emission' => 'Gas',
            ],
        ];
        $product = [
            [
                'id_plant' => '1',
                'id_emisi' => '1',
                'welding' => '27358,07',
                'painting' => '19333,33',
                'assy' => '26269,32',
                'press' => '20751,03',
            ],
            [
                'id_plant' => '1',
                'id_emisi' => '2',
                'welding' => '9491,52',
                'painting' => '9346,73',
                'assy' => '3970,87',
                'press' => '3033,213',
            ],
            [
                'id_plant' => '1',
                'id_emisi' => '3',
                'welding' => '105,56',
                'painting' => '124,3',
                'assy' => '129,17',
                'press' => '62,28',
            ],
            [
                'id_plant' => '2',
                'id_emisi' => '1',
                'welding' => '27358,07',
                'painting' => '19333,33',
                'assy' => '26269,32',
                'press' => '20751,03',
            ],
            [
                'id_plant' => '2',
                'id_emisi' => '2',
                'welding' => '9491,52',
                'painting' => '9346,73',
                'assy' => '3970,87',
                'press' => '3033,213',
            ],
            [
                'id_plant' => '2',
                'id_emisi' => '3',
                'welding' => '105,56',
                'painting' => '124,3',
                'assy' => '129,17',
                'press' => '62,28',
            ],
            [
                'id_plant' => '3',
                'id_emisi' => '1',
                'welding' => '27358,07',
                'painting' => '19333,33',
                'assy' => '26269,32',
                'press' => '20751,03',
            ],
            [
                'id_plant' => '3',
                'id_emisi' => '2',
                'welding' => '9491,52',
                'painting' => '9346,73',
                'assy' => '3970,87',
                'press' => '3033,213',
            ],
            [
                'id_plant' => '3',
                'id_emisi' => '3',
                'welding' => '105,56',
                'painting' => '124,3',
                'assy' => '129,17',
                'press' => '62,28',
            ],
        ];

        Plant::insert($plant);
        Emisi::insert($emisi);
        Product::insert($product);
    }
}
