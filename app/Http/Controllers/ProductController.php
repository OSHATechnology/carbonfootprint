<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plant;
use App\Models\Emisi;
use App\Models\Product;

class ProductController extends Controller
{
    public function dashboard($id_plant = 1)
    {
          $data_plants = Plant::all();
          $data_emissions = Product::query()
                         ->join('emisis', 'emisis.id', '=', 'products.id_emisi')
                         ->join('plants', 'plants.id', '=', 'products.id_plant')
                         ->where('products.id_plant', '=', $id_plant)
                         ->get();
          return view('components.dashboard', compact('data_plants', 'data_emissions'));
    }
    public function getEmissionByPlant($id_plant)
    {
          $data_emissions = Product::query()
                         ->join('emisis', 'emisis.id', '=', 'products.id_emisi')
                         ->join('plants', 'plants.id', '=', 'products.id_plant')
                         ->where('products.id_plant', '=', $id_plant)
                         ->get();
         echo json_encode($data_emissions);
    }
}
