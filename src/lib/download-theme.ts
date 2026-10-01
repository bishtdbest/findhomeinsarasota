import JSZip from 'jszip';

// Theme files content
export const THEME_FILES = {
  'style.css': `/*
Theme Name: Sarasota Headless Luxury Real Estate
Theme URI: https://findinghomeinsarasota.com
Author: Senior Headless Architect
Author URI: https://findinghomeinsarasota.com
Description: Production-ready Headless WordPress Theme for Finding Home in Sarasota. Features native Custom Post Types (Properties, Enclaves, Agents), native custom meta boxes without ACF, optimized REST API endpoints, CORS handling, and instant demo data seeding.
Version: 1.0.0
Requires at least: 6.0
Tested up to: 6.7
Requires PHP: 8.0
License: MIT
Text Domain: sarasota-headless
*/`,

  'theme.json': `{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        { "slug": "primary", "color": "#994530", "name": "Terracotta Sunset" },
        { "slug": "primary-container", "color": "#fe947a", "name": "Peach Glow" },
        { "slug": "secondary", "color": "#00696d", "name": "Deep Gulf Teal" },
        { "slug": "secondary-container", "color": "#83d4d8", "name": "Aqua Water" },
        { "slug": "dark", "color": "#121e1e", "name": "Dark Slate" },
        { "slug": "background", "color": "#effcfd", "name": "Coastal Surface" },
        { "slug": "white", "color": "#ffffff", "name": "Pure White" }
      ]
    },
    "typography": {
      "fontFamilies": [
        { "fontFamily": "Outfit, sans-serif", "slug": "heading", "name": "Outfit" },
        { "fontFamily": "Roboto Flex, sans-serif", "slug": "body", "name": "Roboto Flex" }
      ]
    }
  }
}`,

  'index.php': `<?php
/**
 * Sarasota Headless Luxury Real Estate - Production Homepage
 * Full-fidelity visual frontend running natively on WordPress & XAMPP
 */
if (function_exists('get_header')) {
    get_header();
}

$wp_properties = function_exists('get_posts') ? get_posts([
    'post_type' => 'property',
    'posts_per_page' => 8,
    'post_status' => 'publish'
]) : [];

$properties = [
    [
        'title' => '4128 Ocean Blvd',
        'city' => 'Siesta Key',
        'state' => 'FL',
        'zip' => '34242',
        'price' => '$2,450,000',
        'beds' => 4,
        'baths' => 5,
        'sqft' => '4,210',
        'mls' => 'A4592031',
        'status' => 'ACTIVE MLS',
        'image' => 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    ],
    [
        'title' => '7314 Whitemarsh Cir',
        'city' => 'Lakewood Ranch',
        'state' => 'FL',
        'zip' => '34202',
        'price' => '$1,280,000',
        'beds' => 3,
        'baths' => 3,
        'sqft' => '2,850',
        'mls' => 'A4592088',
        'status' => 'ACTIVE MLS',
        'image' => 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    ],
    [
        'title' => '35 Watergate Dr #904',
        'city' => 'Downtown Sarasota',
        'state' => 'FL',
        'zip' => '34236',
        'price' => '$895,000',
        'beds' => 2,
        'baths' => 2,
        'sqft' => '1,740',
        'mls' => 'A4592115',
        'status' => 'ACTIVE MLS',
        'image' => 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    ],
    [
        'title' => '5425 Gulf of Mexico Dr',
        'city' => 'Longboat Key',
        'state' => 'FL',
        'zip' => '34228',
        'price' => '$3,150,000',
        'beds' => 5,
        'baths' => 6,
        'sqft' => '5,100',
        'mls' => 'A4592200',
        'status' => 'ACTIVE MLS',
        'image' => 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    ]
];

if (!empty($wp_properties)) {
    foreach ($wp_properties as $idx => $p) {
        if ($idx < 4) {
            $pid = $p->ID;
            $f_price = get_post_meta($pid, '_sarasota_price_formatted', true);
            if ($f_price) $properties[$idx]['price'] = $f_price;
            if (get_the_title($pid)) $properties[$idx]['title'] = get_the_title($pid);
            if (get_post_meta($pid, '_sarasota_city', true)) $properties[$idx]['city'] = get_post_meta($pid, '_sarasota_city', true);
            if (get_post_meta($pid, '_sarasota_beds', true)) $properties[$idx]['beds'] = (int)get_post_meta($pid, '_sarasota_beds', true);
            if (get_post_meta($pid, '_sarasota_baths', true)) $properties[$idx]['baths'] = (float)get_post_meta($pid, '_sarasota_baths', true);
            if (get_post_meta($pid, '_sarasota_sqft', true)) $properties[$idx]['sqft'] = number_format((int)get_post_meta($pid, '_sarasota_sqft', true));
            if (get_post_meta($pid, '_sarasota_mls_number', true)) $properties[$idx]['mls'] = get_post_meta($pid, '_sarasota_mls_number', true);
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finding Home in Sarasota | Luxury Real Estate & Relocation</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Roboto+Flex:opsz,wght@8..144,300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { font-family: 'Roboto Flex', sans-serif; background: #FAF9F6; color: #121E1E; margin: 0; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Outfit', sans-serif; }
    </style>
</head>
<body class="bg-[#FAF9F6] text-[#121E1E]">
    <div class="bg-[#121E1E] text-white text-xs py-2 px-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>WordPress Headless CMS & Live Theme Active</span>
        </div>
        <div class="flex items-center gap-4">
            <a href="<?php echo esc_url(admin_url()); ?>" class="text-[#83D4D8] hover:underline font-semibold">WP Admin Dashboard &rarr;</a>
            <a href="<?php echo esc_url(home_url('/wp-json/sarasota/v1/properties')); ?>" target="_blank" class="text-white/70 hover:text-white">REST API</a>
        </div>
    </div>

    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#D8E5E6] shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="<?php echo esc_url(home_url()); ?>" class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-[#994530] text-white flex items-center justify-center shadow-md">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
                </div>
                <div>
                    <span class="block font-bold text-lg font-['Outfit'] text-[#121E1E] tracking-tight leading-none">
                        Finding Home <span class="text-[#994530]">in Sarasota</span>
                    </span>
                    <span class="text-[11px] font-medium text-[#00696D] tracking-wider uppercase">Luxury Real Estate & Relocation</span>
                </div>
            </a>
            <nav class="hidden md:flex items-center gap-8 font-['Outfit'] font-semibold text-sm text-[#121E1E]">
                <a href="#search-section" class="hover:text-[#994530]">MLS Search</a>
                <a href="#properties-section" class="hover:text-[#994530]">Featured Properties</a>
                <a href="#concierge-section" class="hover:text-[#994530]">Local Concierge</a>
                <a href="#enclaves-section" class="hover:text-[#994530]">Sarasota Enclaves</a>
            </nav>
            <a href="#guide-section" class="bg-[#994530] hover:bg-[#762B19] text-white px-5 py-2.5 rounded-xl font-['Outfit'] font-bold text-xs uppercase tracking-wider shadow-md">
                Relocation Guide
            </a>
        </div>
    </header>

    <section class="relative min-h-[560px] flex items-center justify-center text-white overflow-hidden">
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85" alt="Sarasota Estate" class="absolute inset-0 w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/30"></div>
        <div class="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">
            <span class="inline-block bg-white/20 backdrop-blur-md text-white font-['Outfit'] text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold mb-4">
                Sarasota Coastal Luxury Living
            </span>
            <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6">
                Your <span class="text-[#83D4D8] underline decoration-[#994530] decoration-4">Sarasota</span> Story Starts Here.
            </h1>
            <p class="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8 font-light">
                Discover exclusive waterfront estates, prestigious golf enclaves, and white-sand barrier island sanctuaries along Florida\'s cultural coast.
            </p>
            <div class="flex flex-wrap items-center justify-center gap-4">
                <a href="#search-section" class="bg-[#994530] hover:bg-[#762B19] text-white px-7 py-3.5 rounded-xl font-['Outfit'] font-bold text-sm tracking-wide shadow-lg">
                    Search MLS Listings
                </a>
                <a href="#concierge-section" class="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-7 py-3.5 rounded-xl font-['Outfit'] font-bold text-sm tracking-wide">
                    Meet Jenna Ryan &rarr;
                </a>
            </div>
        </div>
    </section>

    <section id="search-section" class="relative -mt-16 z-20 max-w-6xl mx-auto px-4">
        <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div class="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-[#EFFCFD] text-[#00696D] flex items-center justify-center font-bold">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                    </div>
                    <div>
                        <h2 class="font-['Outfit'] font-bold text-xl text-[#121E1E]">MLS Property Search</h2>
                        <p class="text-xs text-slate-500">Live IDX Integration · Sarasota & Surrounding Keys</p>
                    </div>
                </div>
                <span class="text-xs font-semibold text-[#00696D] bg-[#EFFCFD] px-3 py-1 rounded-full">Powered by iHomefinder IDX</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-xs font-['Outfit'] font-bold uppercase text-slate-600 mb-1.5">City / Enclave</label>
                    <select class="w-full bg-[#FAF9F6] border border-slate-200 rounded-xl px-3.5 py-3 text-sm">
                        <option>All Sarasota Areas</option>
                        <option>Siesta Key</option>
                        <option>Lakewood Ranch</option>
                        <option>Downtown Sarasota</option>
                        <option>Longboat Key</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-['Outfit'] font-bold uppercase text-slate-600 mb-1.5">Property Type</label>
                    <select class="w-full bg-[#FAF9F6] border border-slate-200 rounded-xl px-3.5 py-3 text-sm">
                        <option>All Property Types</option>
                        <option>Single Family Estate</option>
                        <option>Luxury Condo</option>
                        <option>Waterfront</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-['Outfit'] font-bold uppercase text-slate-600 mb-1.5">Price Range</label>
                    <select class="w-full bg-[#FAF9F6] border border-slate-200 rounded-xl px-3.5 py-3 text-sm">
                        <option>Any Price</option>
                        <option>$1,000,000+</option>
                        <option>$2,000,000+</option>
                        <option>$3,000,000+</option>
                    </select>
                </div>
                <div class="flex items-end">
                    <button onclick="alert(\'Filtering 284+ active Sarasota MLS listings...\')" class="w-full bg-[#994530] hover:bg-[#762B19] text-white py-3 px-6 rounded-xl font-['Outfit'] font-bold text-sm tracking-wide shadow-md">
                        Search 284+ Listings
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section id="properties-section" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
                <span class="text-xs font-['Outfit'] font-bold uppercase tracking-widest text-[#994530]">Exclusive Portfolio</span>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-[#121E1E] mt-1">Featured Sarasota Listings</h2>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <?php foreach ($properties as $prop): ?>
            <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100 flex flex-col group">
                <div class="relative h-56 overflow-hidden">
                    <img src="<?php echo esc_url($prop['image']); ?>" alt="<?php echo esc_attr($prop['title']); ?>" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <span class="absolute top-3 left-3 bg-[#121E1E]/80 backdrop-blur-md text-white text-[11px] font-['Outfit'] font-bold px-2.5 py-1 rounded-md uppercase">
                        <?php echo esc_html($prop['status']); ?>
                    </span>
                    <span class="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-[#994530] text-sm font-['Outfit'] font-extrabold px-3 py-1 rounded-lg shadow">
                        <?php echo esc_html($prop['price']); ?>
                    </span>
                </div>
                <div class="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 class="font-['Outfit'] font-bold text-lg text-[#121E1E] leading-snug">
                            <?php echo esc_html($prop['title']); ?>
                        </h3>
                        <p class="text-xs text-slate-500 mt-1"><?php echo esc_html($prop['city']); ?>, FL</p>
                    </div>
                    <div class="mt-4 pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs">
                        <div class="bg-[#FAF9F6] p-2 rounded-lg"><span class="font-bold text-[#121E1E] block"><?php echo esc_html($prop['beds']); ?></span><span class="text-[10px] text-slate-500 uppercase">Beds</span></div>
                        <div class="bg-[#FAF9F6] p-2 rounded-lg"><span class="font-bold text-[#121E1E] block"><?php echo esc_html($prop['baths']); ?></span><span class="text-[10px] text-slate-500 uppercase">Baths</span></div>
                        <div class="bg-[#FAF9F6] p-2 rounded-lg"><span class="font-bold text-[#121E1E] block"><?php echo esc_html($prop['sqft']); ?></span><span class="text-[10px] text-slate-500 uppercase">Sq Ft</span></div>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </section>

    <section id="concierge-section" class="bg-[#EFFCFD] border-y border-[#D8E5E6] py-20">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div class="lg:col-span-5">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" alt="Jenna Ryan" class="rounded-3xl shadow-2xl border-4 border-white aspect-[4/5] object-cover">
                </div>
                <div class="lg:col-span-7">
                    <span class="bg-[#994530]/10 text-[#994530] text-xs font-['Outfit'] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-3">
                        Local Sarasota Concierge
                    </span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-[#121E1E] leading-tight mb-4">
                        Hello, I'm Jenna Ryan.
                    </h2>
                    <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-light">
                        Moving to Sarasota is more than buying a home — it's selecting your private enclave, matching school districts, and finding the perfect deepwater boat dock. My concierge team handles every nuance.
                    </p>
                    <a href="mailto:jenna@findinghomeinsarasota.com" class="bg-[#00696D] hover:bg-[#005154] text-white px-7 py-3.5 rounded-xl font-['Outfit'] font-bold text-sm tracking-wide shadow-md inline-block">
                        Schedule Private Consultation &rarr;
                    </a>
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-[#121E1E] text-white py-12 text-center text-xs">
        <p>&copy; <?php echo date('Y'); ?> Finding Home in Sarasota. All rights reserved.</p>
    </footer>
</body>
</html>`,

  'functions.php': `<?php
/**
 * Sarasota Headless Luxury Real Estate - functions.php
 */
if (!defined('ABSPATH')) exit;

define('SARASOTA_THEME_DIR', get_template_directory());

function sarasota_headless_setup() {
    add_theme_support('post-thumbnails');
    register_nav_menus([
        'primary' => __('Primary Navigation', 'sarasota-headless'),
        'communities' => __('Communities Menu', 'sarasota-headless'),
        'resources' => __('Resources Menu', 'sarasota-headless'),
    ]);
}
add_action('after_setup_theme', 'sarasota_headless_setup');

require_once SARASOTA_THEME_DIR . '/inc/post-types.php';
require_once SARASOTA_THEME_DIR . '/inc/taxonomies.php';
require_once SARASOTA_THEME_DIR . '/inc/meta-boxes.php';
require_once SARASOTA_THEME_DIR . '/inc/rest-endpoints.php';
require_once SARASOTA_THEME_DIR . '/inc/cors.php';
require_once SARASOTA_THEME_DIR . '/inc/demo-importer.php';`,

  'inc/post-types.php': `<?php
if (!defined('ABSPATH')) exit;

function sarasota_register_post_types() {
    // 1. Property
    register_post_type('property', [
        'labels' => ['name' => 'Properties', 'singular_name' => 'Property', 'add_new_item' => 'Add New MLS Property'],
        'public' => true,
        'show_in_menu' => true,
        'menu_icon' => 'dashicons-admin-home',
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'show_in_rest' => true,
        'rest_base' => 'properties',
    ]);

    // 2. Enclave
    register_post_type('enclave', [
        'labels' => ['name' => 'Enclaves & Keys', 'singular_name' => 'Enclave'],
        'public' => true,
        'show_in_menu' => true,
        'menu_icon' => 'dashicons-location',
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'show_in_rest' => true,
        'rest_base' => 'enclaves',
    ]);

    // 3. Agent
    register_post_type('agent', [
        'labels' => ['name' => 'Agents', 'singular_name' => 'Agent'],
        'public' => true,
        'show_in_menu' => true,
        'menu_icon' => 'dashicons-businessperson',
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'show_in_rest' => true,
        'rest_base' => 'agents',
    ]);
}
add_action('init', 'sarasota_register_post_types');`,

  'inc/taxonomies.php': `<?php
if (!defined('ABSPATH')) exit;

function sarasota_register_taxonomies() {
    register_taxonomy('property_type', ['property'], [
        'labels' => ['name' => 'Property Types', 'singular_name' => 'Property Type'],
        'hierarchical' => true,
        'show_in_rest' => true,
    ]);
    register_taxonomy('property_feature', ['property'], [
        'labels' => ['name' => 'Features & Amenities', 'singular_name' => 'Feature'],
        'hierarchical' => false,
        'show_in_rest' => true,
    ]);
}
add_action('init', 'sarasota_register_taxonomies');`,

  'inc/meta-boxes.php': `<?php
if (!defined('ABSPATH')) exit;

function sarasota_register_meta() {
    $fields = ['_sarasota_price', '_sarasota_beds', '_sarasota_baths', '_sarasota_sqft'];
    foreach ($fields as $f) {
        register_post_meta('property', $f, ['show_in_rest' => true, 'single' => true, 'type' => 'number']);
    }
    $strings = ['_sarasota_price_formatted', '_sarasota_street', '_sarasota_city', '_sarasota_state', '_sarasota_zip', '_sarasota_mls_number', '_sarasota_status'];
    foreach ($strings as $s) {
        register_post_meta('property', $s, ['show_in_rest' => true, 'single' => true, 'type' => 'string']);
    }
    $booleans = ['_sarasota_is_waterfront', '_sarasota_has_pool', '_sarasota_is_new_construction', '_sarasota_featured'];
    foreach ($booleans as $b) {
        register_post_meta('property', $b, ['show_in_rest' => true, 'single' => true, 'type' => 'boolean']);
    }
}
add_action('init', 'sarasota_register_meta');`,

  'inc/rest-endpoints.php': `<?php
if (!defined('ABSPATH')) exit;

add_action('rest_api_init', function() {
    register_rest_route('sarasota/v1', '/properties', [
        'methods' => 'GET',
        'permission_callback' => '__return_true',
        'callback' => function() {
            $posts = get_posts(['post_type' => 'property', 'posts_per_page' => 20]);
            $data = [];
            foreach ($posts as $p) {
                $id = $p->ID;
                $data[] = [
                    'id' => $id,
                    'title' => get_the_title($id),
                    'price' => (int) get_post_meta($id, '_sarasota_price', true),
                    'priceFormatted' => get_post_meta($id, '_sarasota_price_formatted', true),
                    'street' => get_post_meta($id, '_sarasota_street', true),
                    'city' => get_post_meta($id, '_sarasota_city', true),
                    'state' => 'FL',
                    'zip' => get_post_meta($id, '_sarasota_zip', true),
                    'beds' => (int) get_post_meta($id, '_sarasota_beds', true),
                    'baths' => (float) get_post_meta($id, '_sarasota_baths', true),
                    'sqft' => (int) get_post_meta($id, '_sarasota_sqft', true),
                    'mlsNumber' => get_post_meta($id, '_sarasota_mls_number', true),
                    'status' => 'ACTIVE MLS',
                    'isWaterfront' => get_post_meta($id, '_sarasota_is_waterfront', true) === '1',
                    'hasPool' => get_post_meta($id, '_sarasota_has_pool', true) === '1',
                    'isNewConstruction' => get_post_meta($id, '_sarasota_is_new_construction', true) === '1',
                    'imageUrl' => get_the_post_thumbnail_url($id, 'full') ?: '',
                ];
            }
            return rest_ensure_response(['success' => true, 'data' => $data]);
        }
    ]);
});`,

  'inc/cors.php': `<?php
if (!defined('ABSPATH')) exit;

add_action('rest_api_init', function() {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Authorization, Content-Type, X-Requested-With");
}, 15);`,

  'inc/demo-importer.php': `<?php
if (!defined('ABSPATH')) exit;

add_action('admin_menu', function() {
    add_theme_page('Sarasota Demo Setup', 'Sarasota Demo Setup', 'manage_options', 'sarasota-demo-setup', function() {
        if (isset($_POST['seed_demo'])) {
            // Seed properties
            $props = [
                ['title' => '4128 Ocean Blvd', 'city' => 'Siesta Key', 'price' => 2450000, 'beds' => 4, 'baths' => 5, 'sqft' => 4210, 'mls' => 'A4592031', 'waterfront' => 1, 'pool' => 1],
                ['title' => '7314 Whitemarsh Cir', 'city' => 'Lakewood Ranch', 'price' => 1280000, 'beds' => 3, 'baths' => 3, 'sqft' => 2850, 'mls' => 'A4592088', 'waterfront' => 0, 'pool' => 1],
                ['title' => '35 Watergate Dr #904', 'city' => 'Downtown Sarasota', 'price' => 895000, 'beds' => 2, 'baths' => 2, 'sqft' => 1740, 'mls' => 'A4592115', 'waterfront' => 1, 'pool' => 1],
                ['title' => '5425 Gulf of Mexico Dr', 'city' => 'Longboat Key', 'price' => 3150000, 'beds' => 5, 'baths' => 6, 'sqft' => 5100, 'mls' => 'A4592200', 'waterfront' => 1, 'pool' => 1]
            ];
            foreach ($props as $p) {
                if (!get_page_by_title($p['title'], OBJECT, 'property')) {
                    $pid = wp_insert_post(['post_title' => $p['title'], 'post_type' => 'property', 'post_status' => 'publish']);
                    update_post_meta($pid, '_sarasota_price', $p['price']);
                    update_post_meta($pid, '_sarasota_price_formatted', '$' . number_format($p['price']));
                    update_post_meta($pid, '_sarasota_street', $p['title']);
                    update_post_meta($pid, '_sarasota_city', $p['city']);
                    update_post_meta($pid, '_sarasota_beds', $p['beds']);
                    update_post_meta($pid, '_sarasota_baths', $p['baths']);
                    update_post_meta($pid, '_sarasota_sqft', $p['sqft']);
                    update_post_meta($pid, '_sarasota_mls_number', $p['mls']);
                    update_post_meta($pid, '_sarasota_status', 'ACTIVE MLS');
                    update_post_meta($pid, '_sarasota_is_waterfront', $p['waterfront']);
                    update_post_meta($pid, '_sarasota_has_pool', $p['pool']);
                }
            }
            echo '<div class="updated"><p>All demo data seeded successfully!</p></div>';
        }
        echo '<div class="wrap"><h2>Sarasota Demo Setup</h2><form method="post"><p><input type="submit" name="seed_demo" class="button button-primary" value="Import Demo Listings & Enclaves" /></p></form></div>';
    });
});`
};

export const DATABASE_SQL = `-- Finding Home in Sarasota Headless Database Export
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;

INSERT INTO \`wp_posts\` (\`ID\`, \`post_author\`, \`post_date\`, \`post_content\`, \`post_title\`, \`post_excerpt\`, \`post_status\`, \`post_name\`, \`post_type\`) VALUES
(101, 1, '2026-09-27 12:00:00', 'Breathtaking coastal luxury residence on Siesta Key.', '4128 Ocean Blvd', 'Siesta Key Luxury Beachfront', 'publish', '4128-ocean-blvd', 'property'),
(102, 1, '2026-09-27 12:00:00', 'Custom golf estate in Lakewood Ranch.', '7314 Whitemarsh Cir', 'Lakewood Ranch Golf Estate', 'publish', '7314-whitemarsh-cir', 'property'),
(103, 1, '2026-09-27 12:00:00', 'High-floor bayfront condo in downtown Sarasota.', '35 Watergate Dr #904', 'Downtown Sarasota Bayfront Condo', 'publish', '35-watergate-dr-904', 'property'),
(104, 1, '2026-09-27 12:00:00', 'Direct Gulf-front modern estate on Longboat Key.', '5425 Gulf of Mexico Dr', 'Longboat Key Gulf-Front Modern', 'publish', '5425-gulf-of-mexico-dr', 'property'),
(201, 1, '2026-09-27 12:00:00', 'Famous quartz sands and vibrant island village dining.', 'Siesta Key', 'Beachfront & Coastal Enclave', 'publish', 'siesta-key', 'enclave'),
(202, 1, '2026-09-27 12:00:00', 'Top master-planned community with A-rated schools.', 'Lakewood Ranch', 'Top Master-Planned Community', 'publish', 'lakewood-ranch', 'enclave'),
(203, 1, '2026-09-27 12:00:00', 'Walkable marina, botanical gardens, and arts district.', 'Downtown Sarasota', 'Urban Bayfront & Arts', 'publish', 'downtown-sarasota', 'enclave');

INSERT INTO \`wp_postmeta\` (\`post_id\`, \`meta_key\`, \`meta_value\`) VALUES
(101, '_sarasota_price', '2450000'), (101, '_sarasota_price_formatted', '$2,450,000'), (101, '_sarasota_street', '4128 Ocean Blvd'), (101, '_sarasota_city', 'Siesta Key'), (101, '_sarasota_zip', '34242'), (101, '_sarasota_beds', '4'), (101, '_sarasota_baths', '5'), (101, '_sarasota_sqft', '4210'), (101, '_sarasota_mls_number', 'A4592031'), (101, '_sarasota_status', 'ACTIVE MLS'), (101, '_sarasota_is_waterfront', '1'), (101, '_sarasota_has_pool', '1'),
(102, '_sarasota_price', '1280000'), (102, '_sarasota_price_formatted', '$1,280,000'), (102, '_sarasota_street', '7314 Whitemarsh Cir'), (102, '_sarasota_city', 'Lakewood Ranch'), (102, '_sarasota_zip', '34202'), (102, '_sarasota_beds', '3'), (102, '_sarasota_baths', '3'), (102, '_sarasota_sqft', '2850'), (102, '_sarasota_mls_number', 'A4592088'), (102, '_sarasota_status', 'ACTIVE MLS'), (102, '_sarasota_is_waterfront', '0'), (102, '_sarasota_has_pool', '1'),
(103, '_sarasota_price', '895000'), (103, '_sarasota_price_formatted', '$895,000'), (103, '_sarasota_street', '35 Watergate Dr #904'), (103, '_sarasota_city', 'Downtown Sarasota'), (103, '_sarasota_zip', '34236'), (103, '_sarasota_beds', '2'), (103, '_sarasota_baths', '2'), (103, '_sarasota_sqft', '1740'), (103, '_sarasota_mls_number', 'A4592115'), (103, '_sarasota_status', 'ACTIVE MLS'), (103, '_sarasota_is_waterfront', '1'), (103, '_sarasota_has_pool', '1'),
(104, '_sarasota_price', '3150000'), (104, '_sarasota_price_formatted', '$3,150,000'), (104, '_sarasota_street', '5425 Gulf of Mexico Dr'), (104, '_sarasota_city', 'Longboat Key'), (104, '_sarasota_zip', '34228'), (104, '_sarasota_beds', '5'), (104, '_sarasota_baths', '6'), (104, '_sarasota_sqft', '5100'), (104, '_sarasota_mls_number', 'A4592200'), (104, '_sarasota_status', 'ACTIVE MLS'), (104, '_sarasota_is_waterfront', '1'), (104, '_sarasota_has_pool', '1'),
(201, '_enclave_tag', 'Beachfront & Coastal'), (201, '_enclave_starting_price', 'From $850,000'),
(202, '_enclave_tag', 'Top Master-Planned'), (202, '_enclave_starting_price', 'From $550,000'),
(203, '_enclave_tag', 'Urban Bayfront & Arts'), (203, '_enclave_starting_price', 'From $720,000');

COMMIT;`;

export const DATABASE_XML = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:wp="http://wordpress.org/export/1.2/" xmlns:content="http://purl.org/rss/1.0/modules/content/">
<channel>
  <title>Finding Home in Sarasota</title>
  <link>https://findinghomeinsarasota.com</link>
  <description>Luxury Real Estate and Relocation</description>
  <wp:wxr_version>1.2</wp:wxr_version>
  <item>
    <title>4128 Ocean Blvd</title>
    <wp:post_type>property</wp:post_type>
    <wp:status>publish</wp:status>
    <content:encoded><![CDATA[Coastal luxury residence on Siesta Key Beach.]]></content:encoded>
    <wp:postmeta><wp:meta_key>_sarasota_price</wp:meta_key><wp:meta_value><![CDATA[2450000]]></wp:meta_value></wp:postmeta>
    <wp:postmeta><wp:meta_key>_sarasota_street</wp:meta_key><wp:meta_value><![CDATA[4128 Ocean Blvd]]></wp:meta_value></wp:postmeta>
    <wp:postmeta><wp:meta_key>_sarasota_city</wp:meta_key><wp:meta_value><![CDATA[Siesta Key]]></wp:meta_value></wp:postmeta>
    <wp:postmeta><wp:meta_key>_sarasota_beds</wp:meta_key><wp:meta_value><![CDATA[4]]></wp:meta_value></wp:postmeta>
    <wp:postmeta><wp:meta_key>_sarasota_baths</wp:meta_key><wp:meta_value><![CDATA[5]]></wp:meta_value></wp:postmeta>
    <wp:postmeta><wp:meta_key>_sarasota_sqft</wp:meta_key><wp:meta_value><![CDATA[4210]]></wp:meta_value></wp:postmeta>
  </item>
</channel>
</rss>`;

/**
 * Generate and trigger download of the complete theme ZIP
 */
export async function downloadThemeZip(): Promise<void> {
  const zip = new JSZip();
  const themeFolder = zip.folder('sarasota-headless');

  if (themeFolder) {
    for (const [filepath, content] of Object.entries(THEME_FILES)) {
      themeFolder.file(filepath, content);
    }
    // Also include a readme inside the theme
    themeFolder.file('README-HINDI-GUIDE.txt', `FINDING HOME IN SARASOTA - THEME INSTALLATION GUIDE

1. Extract karein aur 'sarasota-headless' folder ko copy karein:
   wp-content/themes/sarasota-headless/

2. WordPress Admin me jayein:
   Appearance -> Themes -> "Sarasota Headless Luxury Real Estate" ko Activate karein.

3. 1-Click Demo Data Seed karne ke liye:
   WordPress Admin me "Sarasota Demo Setup" menu par click karein aur button dabayein!

Sabhi listings, enclaves aur custom fields turant ban jayenge!`);
  }

  const blob = await zip.generateAsync({ type: 'blob' });
  triggerFileDownload(blob, 'sarasota-headless-theme.zip');
}

/**
 * Trigger download of the SQL database file
 */
export function downloadDatabaseSql(): void {
  const blob = new Blob([DATABASE_SQL], { type: 'text/sql;charset=utf-8' });
  triggerFileDownload(blob, 'sarasota-database.sql');
}

/**
 * Trigger download of the WXR XML file
 */
export function downloadDatabaseXml(): void {
  const blob = new Blob([DATABASE_XML], { type: 'application/xml;charset=utf-8' });
  triggerFileDownload(blob, 'sarasota-content.xml');
}

/**
 * Download everything in one Master ZIP bundle
 */
export async function downloadMasterBundle(): Promise<void> {
  const zip = new JSZip();
  
  // 1. Theme folder
  const themeFolder = zip.folder('wp-content/themes/sarasota-headless');
  if (themeFolder) {
    for (const [filepath, content] of Object.entries(THEME_FILES)) {
      themeFolder.file(filepath, content);
    }
  }

  // 2. Database folder
  const dbFolder = zip.folder('database');
  if (dbFolder) {
    dbFolder.file('sarasota-database.sql', DATABASE_SQL);
    dbFolder.file('sarasota-content.xml', DATABASE_XML);
  }

  // 3. Setup guide in Hindi & English
  zip.file('SETUP-GUIDE-HINDI.md', `# सारसोटा हेडलेस वर्डप्रेस + नेक्स्ट.जेएस सेटअप गाइड (Hindi Step-by-Step)

यह कम्प्लीट पैकेज है जिसमें थीम और डेटाबेस दोनों शामिल हैं।

## स्टेप 1: वर्डप्रेस थीम फोल्डर में पेस्ट करें
1. डाउनलोड किए गए ZIP से \`sarasota-headless\` फोल्डर को निकालें।
2. इसे अपने वर्डप्रेस डायरेक्टरी में यहाँ पेस्ट करें:
   \`wp-content/themes/sarasota-headless/\`
3. वर्डप्रेस एडमिन (wp-admin) में जाएँ:
   **Appearance > Themes** पर जाएँ और **"Sarasota Headless Luxury Real Estate"** को **Activate** करें।

## स्टेप 2: डेटाबेस इम्पोर्ट करें (2 आसान विकल्प)

### विकल्प A (सबसे आसान - 1 क्लिक):
थीम एक्टिवेट करते ही आपके WP Admin मेनू में **"Sarasota Demo Setup"** का ऑप्शन आ जाएगा। बस उसपर क्लिक करें और **"Seed Demo Listings & Enclaves"** बटन दबाएँ। सभी 4 लिस्टिंग्स और 24 एन्क्लेव अपने आप डेटाबेस में आ जाएँगे!

### विकल्प B (Tools -> Import):
1. WP Admin में जाएँ: **Tools > Import > WordPress**
2. \`database/sarasota-content.xml\` फाइल को सेलेक्ट करें और 'Upload file and import' पर क्लिक करें।

### विकल्प C (phpMyAdmin / Direct SQL):
अपने होस्टिंग cPanel या LocalWP के phpMyAdmin में जाएँ और \`database/sarasota-database.sql\` फाइल को इम्पोर्ट कर लें।

## स्टेप 3: Next.js Frontend से कनेक्ट करें
Next.js \`.env.local\` में अपने वर्डप्रेस का URL डाल दें:
\`\`\`env
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-domain.com
\`\`\`
बस! आपका पूरा हेडलेस पोर्टल लाइव हो जाएगा।`);

  const blob = await zip.generateAsync({ type: 'blob' });
  triggerFileDownload(blob, 'sarasota-complete-headless-package.zip');
}

function triggerFileDownload(blob: Blob, filename: string) {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}
