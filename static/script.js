document.addEventListener('DOMContentLoaded', function() {
    // نگاشت آیتم منو به باکس مربوطه
    const menuMapping = {
      'ai-item': 'ai-box',
      'peer-item': 'peer-box',
      // اضافه کردن آیتم جدید Analytics
      'analytics-item': 'analytics-box'
    };

    const menuItems = document.querySelectorAll('.sidebar ul li');

    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        // اگر آیتم انتخاب شده فعال نیست
        if (!this.classList.contains('active')) {
          // مخفی کردن همه‌ی باکس‌ها
          Object.values(menuMapping).forEach(boxId => {
            const box = document.getElementById(boxId);
            if (box) {
              box.classList.add('hidden');
            }
          });

          // حذف کلاس active از همه‌ی آیتم‌ها
          menuItems.forEach(i => i.classList.remove('active'));

          // افزودن کلاس active به آیتم کلیک شده
          this.classList.add('active');

          // نمایش باکس مربوط به آیتم
          const correspondingBoxId = menuMapping[this.id];
          if (correspondingBoxId) {
            const correspondingBox = document.getElementById(correspondingBoxId);
            if (correspondingBox) {
              correspondingBox.classList.remove('hidden');
            }
          }
        }
      });
    });
});
