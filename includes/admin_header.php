<?php
include_once __DIR__ . '/../includes/auth.php';
checkAdmin();
$current_page = basename($_SERVER['PHP_SELF']);
?>
<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title ?? 'Admin Dashboard'; ?> | Kohi Sekai</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #FDFBF9; color: #7B7674; }
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
<body class="bg-background flex h-screen overflow-hidden">
    
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-neutral/5 flex flex-col h-full shadow-xl">
        <div class="p-8 border-b border-neutral/5">
            <a href="dashboard.php" class="text-2xl font-extrabold tracking-tight text-primary">KOHI <span class="text-neutral font-light">SEKAI</span></a>
            <p class="text-[10px] uppercase tracking-widest text-neutral/40 font-bold mt-1">Admin Panel</p>
        </div>

        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
            <a href="dashboard.php" class="flex items-center px-4 py-3 <?php echo $current_page == 'dashboard.php' ? 'bg-primary/10 text-primary font-bold' : 'text-neutral/60 hover:bg-neutral/5'; ?> rounded-xl transition-all">
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                Dashboard
            </a>
            <a href="orders_ots.php" class="flex items-center px-4 py-3 <?php echo $current_page == 'orders_ots.php' ? 'bg-primary/10 text-primary font-bold' : 'text-neutral/60 hover:bg-neutral/5'; ?> rounded-xl transition-all">
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                Tambah Pesanan OTS
            </a>
            <a href="events_create.php" class="flex items-center px-4 py-3 <?php echo $current_page == 'events_create.php' ? 'bg-primary/10 text-primary font-bold' : 'text-neutral/60 hover:bg-neutral/5'; ?> rounded-xl transition-all">
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Tambah Event
            </a>
        </nav>

        <div class="p-4 border-t border-neutral/5">
            <a href="logout.php" class="w-full flex items-center justify-center px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all font-bold text-sm">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                Keluar (Logout)
            </a>
        </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 h-full overflow-y-auto">
        <div class="p-10">
