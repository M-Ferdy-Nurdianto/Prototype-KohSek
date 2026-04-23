<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PublicController extends Controller
{
    private function getMembers()
    {
        return [
            [
                'id' => 1,
                'name' => 'Dea',
                'full_name' => 'Kohi Latte Dea',
                'role' => 'Latte',
                'description' => 'Soft, warm, and comforting. Like a perfect cup of Kohi Latte in the morning.',
                'image' => 'img/hero.png',
                'instagram' => '@dea_kohi',
                'twitter' => '@dea_kohi'
            ],
            [
                'id' => 2,
                'name' => 'Faatin',
                'full_name' => 'Kohi Macchiato Faatin',
                'role' => 'Macchiato',
                'description' => 'Sweet with a hint of intensity. A layered personality that delights every sense.',
                'image' => 'img/hero.png',
                'instagram' => '@faatin_kohi',
                'twitter' => '@faatin_kohi'
            ],
            [
                'id' => 3,
                'name' => 'Vinci',
                'full_name' => 'Kohi Affogato Vinci',
                'role' => 'Affogato',
                'description' => 'A bold blend of cool charm and warm energy. The perfect treat for your soul.',
                'image' => 'img/hero.png',
                'instagram' => '@vinci_kohi',
                'twitter' => '@vinci_kohi'
            ]
        ];
    }

    public function index()
    {
        return view('home');
    }

    public function members()
    {
        $members = $this->getMembers();
        return view('members', compact('members'));
    }

    public function cheki()
    {
        $members = $this->getMembers();
        $tickets = array_map(function($member) {
            return [
                'id' => $member['id'],
                'member' => $member['name'],
                'image' => $member['image'],
                'pricing' => [
                    'regular' => [
                        'pre_order' => 35000,
                        'on_the_spot' => 40000
                    ],
                    'vip' => [
                        'pre_order' => 70000,
                        'on_the_spot' => 80000
                    ]
                ]
            ];
        }, $members);

        return view('cheki', compact('tickets'));
    }

    public function checkout()
    {
        $members = $this->getMembers();
        return view('checkout', compact('members'));
    }

    public function processCheckout(Request $request)
    {
        // Mock processing
        return redirect()->route('receipt')->with([
            'member' => $request->input('member'),
            'type' => $request->input('type'),
            'amount' => $request->input('amount', '35.000') // Dummy amount for UI demo
        ]);
    }

    public function receipt()
    {
        return view('receipt');
    }
}
