<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title ?? 'Kohi Sekai'; ?> | Official Website</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #FDFBF9; color: #7B7674; }
        .glass { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
        .text-primary { color: #B19685; }
        .bg-primary { background-color: #B19685; }
        .border-primary { border-color: #B19685; }
        .bg-background { background-color: #FDFBF9; }
        .rounded-4xl { border-radius: 2rem; }
    </style>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#B19685',
                        secondary: '#E8D3C9',
                        tertiary: '#D4BDB0',
                        neutral: '#7B7674',
                        background: '#FDFBF9',
                    }
                }
            }
        }
    </script>
</head>
<body x-data="{ atTop: true }" @scroll.window="atTop = (window.pageYOffset > 50 ? false : true)">
<?php if (!isset($hideNavbar) || !$hideNavbar): ?>
    <?php include 'navbar.php'; ?>
<?php endif; ?>
<main>
