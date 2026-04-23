<?php
include 'includes/data.php';
$title = 'Members';
include 'includes/header.php';
?>

<!-- Header Section -->
<section class="pt-40 pb-20 bg-background overflow-hidden relative">
    <div class="container mx-auto px-6 relative z-10">
        <h1 class="text-6xl font-extrabold text-neutral mb-6">
            The <span class="text-primary italic">Members</span>
        </h1>
        <p class="text-lg text-neutral/60 max-w-2xl leading-relaxed">
            Meet the unique personalities that make up Kohi Sekai. Each member brings a different flavor to the group, creating a perfect blend of talent and charisma.
        </p>
    </div>
    <div class="absolute top-0 right-0 w-1/4 h-1/2 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2"></div>
</section>

<!-- Members Grid -->
<section class="py-20 bg-white">
    <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-12">
            <?php foreach($members as $member): ?>
                <div class="group">
                    <div class="relative mb-8 rounded-4xl overflow-hidden shadow-xl aspect-[3/4] transition-transform duration-500 hover:-translate-y-2">
                        <img src="<?php echo $member['image']; ?>" alt="<?php echo $member['name']; ?>" class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                            <div class="flex space-x-4">
                                <span class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary cursor-pointer hover:bg-secondary transition-colors">
                                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <div class="flex justify-between items-end">
                            <h3 class="text-3xl font-extrabold text-neutral"><?php echo $member['full_name']; ?></h3>
                            <span class="text-primary font-bold text-sm uppercase tracking-widest pb-1"><?php echo $member['role']; ?></span>
                        </div>
                        <p class="text-neutral/60 leading-relaxed italic"><?php echo $member['description']; ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
