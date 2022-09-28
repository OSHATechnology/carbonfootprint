<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HasilEmisi>
 */
class HasilEmisiFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'welding' => fake()->randomFloat(3,100,9999),
            'painting' => fake()->randomFloat(3,100,9999),
            'assy' => fake()->randomFloat(3,100,9999),
            'press' => fake()->randomFloat(3,100,9999),
            'total' => fake()->randomFloat(3,10000,80000),
            'tanggal' => fake()->dateTimeInInterval('-4 years','+4 years'),
        ];
    }
}
