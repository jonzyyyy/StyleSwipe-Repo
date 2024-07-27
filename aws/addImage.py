import boto3

BUCKET_NAME = 'styleswipedata'
train_data_dir = ["data/Footwear/Men/Images/images_with_product_ids/", \
                "data/Footwear/Women/Images/images_with_product_ids/",\
                "data/Apparel/Boys/Images/images_with_product_ids/",\
                "data/Apparel/Girls/Images/images_with_product_ids/"]

# Adding items to S3 bucket (image is a file_name string ending with .jpg)
def add_image(image, demographic, bucket_name=BUCKET_NAME):
    s3_path = train_data_dir[demographic] + str(image)
    s3 = boto3.client('s3')
    response = s3.put_object(Key=s3_path, Bucket=bucket_name)
    return response

# Removing Items:
def remove_image(image, demographic, bucket_name=BUCKET_NAME):
    s3_path = train_data_dir[demographic] + str(image)
    s3 = boto3.client('s3')
    response = s3.delete_object(Key=s3_path, Bucket=bucket_name)
    return response

print(remove_image('10037.jpg', 0, bucket_name='non-dupes'))
print(add_image('0000.jpg', 0, bucket_name='non-dupes'))
