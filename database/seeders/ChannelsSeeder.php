<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Channel;

class ChannelsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Channel::create([
            'title' => 'Laravel 6'
        ]);
        Channel::create([
            'title' => 'Vue.js'
        ]);
        Channel::create([
            'title' => 'React.js'
        ]);
        Channel::create([
            'title' => 'Python'
        ]);
    }
}
