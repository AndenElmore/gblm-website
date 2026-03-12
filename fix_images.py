from PIL import Image
import os

img_dir = '/Users/andenelmore/Desktop/First Page South/Clients/David Kaye/Website/GBLM SITE/public/images/'
images_to_check = ['service-clearing-hq.jpg', 'service-bush-hogging-hq.jpg']

for img_name in images_to_check:
    img_path = os.path.join(img_dir, img_name)
    try:
        img = Image.open(img_path)
        print(f"Opened {img_name}: {img.size}")
        # PIL rotate(90) rotates counter-clockwise
        img_rotated = img.rotate(90, expand=True)
        img_rotated.save(img_path, quality=95)
        print(f"Rotated {img_name} 90 degrees counter-clockwise.")
    except Exception as e:
        print(f"Error processing {img_name}: {e}")
