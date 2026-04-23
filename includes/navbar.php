<?php
$current_page = basename($_SERVER['PHP_SELF']);
?>
<div class="fixed w-full z-50 flex justify-center transition-all duration-500" :class="{'pt-4': !atTop, 'pt-8': atTop}">
    <nav class="glass rounded-full px-8 py-4 flex justify-between items-center w-[90%] max-w-6xl shadow-2xl border border-white/20 transition-all duration-500" :class="{'scale-95 shadow-primary/10': !atTop}">
        <a href="index.php" class="text-2xl font-extrabold tracking-tight text-primary">KOHI <span class="text-neutral font-light">SEKAI</span></a>
        
        <div class="hidden md:flex space-x-8 items-center">
            <a href="index.php" class="font-bold text-sm tracking-wide uppercase <?php echo $current_page == 'index.php' ? 'text-primary' : 'text-neutral/60'; ?> hover:text-primary transition-colors">Home</a>
            <a href="members.php" class="font-bold text-sm tracking-wide uppercase <?php echo $current_page == 'members.php' ? 'text-primary' : 'text-neutral/60'; ?> hover:text-primary transition-colors">Member</a>
            <a href="cheki.php" class="font-bold text-sm tracking-wide uppercase <?php echo $current_page == 'cheki.php' ? 'text-primary' : 'text-neutral/60'; ?> hover:text-primary transition-colors">Cheki</a>
            <a href="cheki.php" class="bg-primary text-white px-8 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-neutral transition-all shadow-lg shadow-primary/20 ml-4">Buy Cheki</a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="md:hidden text-neutral">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
    </nav>
</div>
