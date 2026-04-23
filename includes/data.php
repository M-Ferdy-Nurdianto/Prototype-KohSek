<?php
// Shared Data for Kohi Sekai

$members = [
    [
        'id' => 1,
        'name' => 'Dea',
        'full_name' => 'Kohi Latte Dea',
        'role' => 'Latte',
        'description' => 'Soft, warm, and comforting. Like a perfect cup of Kohi Latte in the morning.',
        'image' => 'assets/img/hero.png',
        'instagram' => '@dea_kohi',
        'twitter' => '@dea_kohi'
    ],
    [
        'id' => 2,
        'name' => 'Faatin',
        'full_name' => 'Kohi Macchiato Faatin',
        'role' => 'Macchiato',
        'description' => 'Sweet with a hint of intensity. A layered personality that delights every sense.',
        'image' => 'assets/img/hero.png',
        'instagram' => '@faatin_kohi',
        'twitter' => '@faatin_kohi'
    ],
    [
        'id' => 3,
        'name' => 'Vinci',
        'full_name' => 'Kohi Affogato Vinci',
        'role' => 'Affogato',
        'description' => 'A bold blend of cool charm and warm energy. The perfect treat for your soul.',
        'image' => 'assets/img/hero.png',
        'instagram' => '@vinci_kohi',
        'twitter' => '@vinci_kohi'
    ]
];

$events = [
    ['title' => 'Espresso Morning Session', 'date' => '24 April 2026', 'time' => '10:00 AM', 'location' => 'Kohi Cafe, Yogyakarta', 'price' => 'Rp 50.000'],
    ['title' => 'Creamy Sunset Concert', 'date' => '30 April 2026', 'time' => '05:00 PM', 'location' => 'Jogja Expo Center', 'price' => 'Rp 75.000']
];

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

// Utility functions
function formatPrice($price) {
    return "Rp " . number_format($price, 0, ',', '.');
}
?>
