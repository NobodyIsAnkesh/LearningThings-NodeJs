from urllib.parse import urlparse
from urllib.parse import unquote

s3_path = "https://file-management-dev-tl-ue1-s3.s3.amazonaws.com/ACCOUNT/df5470c8-5130-4e7c-8c3f-5ed04184ea75/LOAN/BR611457/DOCUMENTS/1634627919788/Appraisal%20-%20353%20s%205th%20Avenue-1-3.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3CCI2XLFJFSEUTLD%2F20211019%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211019T070756Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=ef357bd7d294592b5f10952ae1955cdf318c75348b254320bedfd399ded65034"
res = urlparse(s3_path)
file_name = unquote(res.path)
print(file_name)