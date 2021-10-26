import boto3
import botocore

BUCKET_NAME = 'file-management-prod-tl-ue1-s3' # replace with your bucket name
KEY = 'ACCOUNT/645d6eeb-4c5b-4fad-95a5-d0d8cc294732/LOAN/TY773282/DOCUMENTS/1634242660219/Fitzgerald - Amarillo 2 Property Current Lease (3801 South Jackson St).pdf'

# https://file-management-prod-tl-ue1-s3.s3.amazonaws.com/ACCOUNT/56237859-1a2c-4ab0-9881-856cc18c6044/LOAN/BR332140/DOCUMENTS/1620690767964/%5B2021031301%5D%20-%20GC%20License%20Status%20-%20License%20Detail%20-CSLB.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3CCI2XLFJFSEUTLD%2F20210510%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210510T235248Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=cc56d1769b0fb0e4a25eb6c767c829486bf4d015fb71db937310119abbe69476
# https://file-management-prod-tl-ue1-s3.s3.amazonaws.com/ACCOUNT/884e81c7-1ca6-4cca-adca-745052e723b9/LOAN/BR585795/DOCUMENTS/1616613931236/title.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3CCI2XLFJFSEUTLD%2F20210324%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210324T192523Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=7d1a34f166f0ec7e99c2f44f06b669602135abb3726ee7a84bf4f78141ffe5b1
# https://file-management-prod-tl-ue1-s3.s3.amazonaws.com/ACCOUNT/691ef55d-57c4-4f9d-ad86-6225abe8b74a/LOAN/TY064877/DOCUMENTS/1622717089890/Appraisal%20%24634k%20%2096%20COLUMBUS%20AVENUE.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3CCI2XLFJFSEUTLD%2F20210603%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210603T104449Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=3c8da22965ae397c54a4a83caef1734908f48cac36e51bdf48377c1e1d682c4a
# https://file-management-prod-tl-ue1-s3.s3.amazonaws.com/ACCOUNT/de6550a4-9e2c-4895-93c2-75ec37c06cb0/LOAN/TY026218/DOCUMENTS/1626132049546/COGS%20-%204584T30.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3CCI2XLFJFSEUTLD%2F20210712%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210712T232050Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b755209b29fc1a6bfa88935f9054f118cb091ecc773e392192f128928637cdac
# https://file-management-prod-tl-ue1-s3.s3.amazonaws.com/ACCOUNT/dc2e2580-25af-4ea9-a40b-e4376c769bb6/LOAN/TY432984/DOCUMENTS/1626127866712/Howell%20and%20Howell%20June%20Bank%20%20stmt.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3CCI2XLFJFSEUTLD%2F20210712%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210712T221107Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a65c79ef046d3cf68083971aef23ed62b55d59ab68c8a78b48afd8ca173dfb92
# https://file-management-prod-tl-ue1-s3.s3.amazonaws.com/ACCOUNT/473f22fa-dc8e-422d-95b6-3a88d08422a9/LOAN/TY118308/DOCUMENTS/1626125749672/James%20Livingston%20-%20OFAC%20-%20No%20Documents%20Found.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3CCI2XLFJFSEUTLD%2F20210712%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210712T213550Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=50810929a3558edb594e01835574c00af5be9e0bbbe7b55256b57cfe51092198
# https://file-management-prod-tl-ue1-s3.s3.amazonaws.com/ACCOUNT/bc694494-ca86-47ee-ae3f-cd60fc67666c/LOAN/TY908279/DOCUMENTS/1626120928977/BINDER.%201506%20Manson%20rental%20prop.%20Feel%20%40%20Home%20Properties%20LLC.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3CCI2XLFJFSEUTLD%2F20210712%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210712T201530Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a0d2d69a6ae93e8211cf3f643a96f2ee2510e87fddb9da7054bf58f54dee1c23
#https://file-management-prod-tl-ue1-s3.s3.amazonaws.com/ACCOUNT/645d6eeb-4c5b-4fad-95a5-d0d8cc294732/LOAN/TY773282/DOCUMENTS/1634242660219/Fitzgerald%20-%20Amarillo%202%20Property%20Current%20Lease%20%283801%20South%20Jackson%20St%29.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3CCI2XLFJFSEUTLD%2F20211014%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211014T201741Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=cd012a64a168171ded202ffeb22151aa444663a9c3cf81f6672b79a5690ca443

s3 = boto3.resource('s3')

try:
    s3.Bucket(BUCKET_NAME).download_file(KEY, 'Fitzgerald - Amarillo 2 Property Current Lease (3801 South Jackson St).pdf')
except botocore.exceptions.ClientError as e:
    if e.response['Error']['Code'] == "404":
        print("The object does not exist.")
    else:
        raise