<?php
if (have_rows('affiliate_programs_table_header')) :

    while (have_rows('affiliate_programs_table_header')) : the_row();
        $table_heading_column_one = get_sub_field('table_heading_column_one');
        $table_heading_column_one_image = get_sub_field('table_heading_column_one_image');
        $table_heading_column_two = get_sub_field('table_heading_column_two');
        $table_heading_column_three = get_sub_field('table_heading_column_three');
        $table_heading_column_four = get_sub_field('table_heading_column_four');
        $table_heading_column_five = get_sub_field('table_heading_column_five');
        $table_heading_column_six = get_sub_field('table_heading_column_six');
?>
        <div class="affiliate-programs-table-wrapper">
            <div class="affiliate-programs-table">
                <div class="affiliate-program-table-functionality-wrapper">
                    <div class="affiliate-program-table-search-and-filter-div-wrapper">
                        <div class="wrapper-dropdown affiliate-programs-table-filter-div-dropdown affiliate-programs-table-filter-div" id="affiliate-programs-table-filter-div-id">
                            <div class="affiliate-program-table-left-and-middle-div-wrapper">
                                <div class="affiliate-programs-table-filter-left-div">
                                    <img src="<?php echo site_url(); ?>/wp-content/uploads/2024/07/filter-image.svg" alt="filter image" class="affiliate-programs-table-filter-left-image">
                                    <span>Filter</span>
                                </div>
                                <div class="affiliate-programs-table-filter-middle-div" id="affiliate-programs-table-filter-middle-div-id">
                                </div>
                            </div>
                            <img src="<?php echo site_url(); ?>/wp-content/uploads/2024/07/dropdown-arrow-image.svg" alt="dropdown arrow image" class="affiliate-programs-table-filter-right-image" id="affiliate-programs-table-filter-right-image-id">
                            <ul class="dropdown affiliate-programs-table-filter-dropdown-ul">
                                <li class="affiliate-programs-table-selected-filters-display-div" id="affiliate-programs-table-selected-filters-display-div-id"></li>
                                <li class="item affiliate-programs-table-filter-categories-li affiliate-programs-table-first-filter-dropdown-li">
                                    <?php if ($table_heading_column_two) : ?><div class="affiliate-programs-table-filter-type"><?php echo $table_heading_column_two; ?></div><?php endif; ?>
                                    <div class="affiliate-programs-table-filter-add-category-wrapper">
                                        <div class="affiliate-programs-table-filter-add-text">Add</div><img src="<?php echo site_url(); ?>/wp-content/uploads/2024/07/filter-add-image.svg" alt="dropdown arrow image" class="affiliate-programs-table-filter-add-image affiliate-programs-table-filter-add-image-grey ">
                                        <img src="<?php echo site_url(); ?>/wp-content/uploads/2024/07/plus-blue-color.svg" alt="dropdown arrow image" class="affiliate-programs-table-filter-add-image affiliate-programs-table-filter-add-image-blue">
                                    </div>
                                    <div class="affiliate-programs-table-filter-search-bar-wrapper" id="">
                                        <input type="text" id="search-software-filter-id" placeholder="Search" onkeyup="searchFiltersUtility('search-software-filter-id','software', renderSoftwareFilters)">
                                        <img src="<?php echo site_url(); ?>/wp-content/uploads/2024/07/filter-search-cross.svg" alt="filer search cross image" class="affiliate-programs-table-filter-search-cross-image">
                                    </div>
                                    <div class="affiliate-programs-table-selected-filter affiliate-program-table-filter-categories"></div>
                                </li>
                                <li class="affiliate-programs-table-software-filters-items-wrapper">
                                    <div class="affiliate-programs-table-software-filters-container" id="affiliate-programs-table-software-filters-container-id"></div>
                                </li>
                                <li class="item affiliate-programs-table-filter-categories-li">
                                    <?php if ($table_heading_column_four) : ?><div class=" affiliate-programs-table-filter-type affiliate-programs-table-routy-support-filter-type-heading-div"><?php echo $table_heading_column_four; ?></div><?php endif; ?>
                                    <div class="affiliate-programs-table-filter-add-category-wrapper">
                                        <div class="affiliate-programs-table-filter-add-text">Add</div><img src="<?php echo site_url(); ?>/wp-content/uploads/2024/07/filter-add-image.svg" alt="dropdown arrow image" class="affiliate-programs-table-filter-add-image affiliate-programs-table-filter-add-image-grey ">
                                        <img src="<?php echo site_url(); ?>/wp-content/uploads/2024/07/plus-blue-color.svg" alt="dropdown arrow image" class="affiliate-programs-table-filter-add-image affiliate-programs-table-filter-add-image-blue">
                                    </div>
                                    <div class="affiliate-programs-table-filter-search-bar-wrapper">
                                        <input type="text" id="routy-support-search-input-filter-id" placeholder="Select value..." onkeyup="searchRoutySupport()">
                                        <img src="<?php echo site_url(); ?>/wp-content/uploads/2024/07/filter-search-cross.svg" alt="filer search cross image" class="affiliate-programs-table-filter-search-cross-image">
                                    </div>
                                    <div class="affiliate-programs-table-selected-filter affiliate-program-table-filter-categories"></div>
                                </li>
                                <li class="affiliate-programs-table-routy-support-filters-items-wrapper">
                                    <div class="affiliate-programs-table-routy-support-filters-container" id="affiliate-programs-table-routy-support-filters-container-id">
                                    </div>
                                </li>
                                <li class="item affiliate-programs-table-filter-categories-li">
                                    <?php if ($table_heading_column_five) : ?><div class="affiliate-programs-table-filter-type"><?php echo $table_heading_column_five; ?></div><?php endif; ?>
                                    <div class="affiliate-programs-table-filter-add-category-wrapper">
                                        <div class="affiliate-programs-table-filter-add-text">Add</div><img src="<?php echo site_url(); ?>/wp-content/uploads/2024/07/filter-add-image.svg" alt="dropdown arrow image" class="affiliate-programs-table-filter-add-image affiliate-programs-table-filter-add-image-grey ">
                                        <img src="<?php echo site_url(); ?>/wp-content/uploads/2024/07/plus-blue-color.svg" alt="dropdown arrow image" class="affiliate-programs-table-filter-add-image affiliate-programs-table-filter-add-image-blue">
                                    </div>
                                    <div class="affiliate-programs-table-filter-search-bar-wrapper">
                                        <input type="text" id="category-search-input-filter-id" placeholder="Search" onkeyup="searchFiltersUtility('category-search-input-filter-id','category', renderCategoryFilters)">
                                        <img src="<?php echo site_url(); ?>/wp-content/uploads/2024/07/filter-search-cross.svg" alt="filer search cross image" class="affiliate-programs-table-filter-search-cross-image">
                                    </div>
                                    <div class="affiliate-programs-table-selected-filter affiliate-program-table-filter-categories"></div>
                                </li>
                                <li class="affiliate-programs-table-category-filters-items-wrapper">
                                    <div class="affiliate-programs-table-category-filters-container" id="affiliate-programs-table-category-filters-container-id"></div>
                                </li>
                            </ul>
                        </div>
                        <div class="affiliate-programs-table-search-div affiliate-programs-table-search-div-desktop"><label for="affiliate-programs-table-search-input">
                                <img src="<?php echo site_url(); ?>/wp-content/uploads/2024/07/search-image.svg" alt="search functionality image" class="affiliate-programs-table-search-image"></label><input type="text" id="affiliate-programs-table-search-input" placeholder="Search program, software or commissions" onkeyup="searchHandler()">
                        </div>
                    </div>
                    <div class="wrapper-dropdown affiliate-programs-table-sort-div-dropdown  affiliate-programs-table-sort-div">
                        <img src="<?php echo site_url(); ?>/wp-content/uploads/2024/07/sort-image.svg " alt="sort arrow image" class="affiliate-program-table-sort-div-image-left"></img>
                        <div class="affiliate-program-table-sort-div-select"><span class="affiliate-programs-table-sort-span-left">Sort by: </span><span class="affiliate-programs-table-sort-selected-display">Newest First</span></div>
                        <img src="<?php echo site_url(); ?>/wp-content/uploads/2024/07/dropdown-arrow-image.svg" alt="sort arrow image" class="affiliate-program-table-sort-div-image-right"></img>
                        <ul class="dropdown affiliate-programs-table-sort-dropdown-ul">
                            <li class="item">Newest first</li>
                            <li class="item">Oldest first</li>
                        </ul>
                    </div>
                    <div class="affiliate-programs-table-search-div affiliate-programs-table-search-image-mobile" id="affiliate-programs-table-search-image-mobile-id">
                        <img src="<?php echo site_url(); ?>/wp-content/uploads/2024/07/search-image.svg" alt="search functionality image" class="affiliate-programs-table-search-image">
                    </div>
                </div>
                <div class="affiliate-programs-table-search-input-div-mobile" id="affiliate-programs-table-search-input-div-mobile-id"><input type="text" id="affiliate-programs-table-search-input-mobile" placeholder="Search program, software or commissions" onkeyup="searchHandler()"></div>
                <div class="affiliate-programs-table-header-and-body-pagination-section">
                    <div class="affiliate-program-table-header-body-and-pagination-wrapper">
                        <div class="affiliate-programs-table-header">
                            <div class="affiliate-programs-table-row-1">
                                <?php if ($table_heading_column_one) : ?><div class="affiliate-programs-table-column-1"><?php echo $table_heading_column_one; ?><?php if ($table_heading_column_one_image) : ?><img src="<?php echo $table_heading_column_one_image['url']; ?>" alt="<?php echo $table_heading_column_one_image['alt']; ?>" class="affiliate-program-arrow-image" id="affiliate-program-arrow-image-id" onclick="sortProgramsByName()"><?php endif; ?></div><?php endif; ?>
                                <?php if ($table_heading_column_two) : ?><div class="affiliate-programs-table-column-2"><?php echo $table_heading_column_two; ?></div><?php endif; ?>
                                <?php if ($table_heading_column_three) : ?><div class="affiliate-programs-table-column-3"><?php echo $table_heading_column_three; ?> </div><?php endif; ?>
                                <?php if ($table_heading_column_four) : ?><div class="affiliate-programs-table-column-4"><?php echo $table_heading_column_four; ?></div><?php endif; ?>
                                <?php if ($table_heading_column_five) : ?><div class="affiliate-programs-table-column-5"><?php echo $table_heading_column_five; ?></div><?php endif; ?>
                                <?php if ($table_heading_column_six) : ?><div class="affiliate-programs-table-column-6"><?php echo $table_heading_column_six; ?></div><?php endif; ?>
                            </div>
                        </div>
                        <div id="affiliate-programs-table-id" class="affiliate-programs-table-body">
                        </div>
                        <div id="affiliate-programs-table-pagination-id" class="affiliate-programs-table-pagination">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="loader-for-affiliate-programs-table"></div>
    <?php endwhile; ?>
<?php endif; ?>
