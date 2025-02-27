

1. mul, 就是默认signed * signed
2. mulh, 就是默认signed * signed
3. mulhsu, 最后结尾的su，就是表示signed * unsigned
4. mulsu，最后结尾的是u, 就是表示unsigned * unsigned

wire [127:0] ext_mul_result = { signed_ext_alu_src1 * signed_ext_alu_src2}; //默认是sign * signed

wire [127:0] su_ext_mul_result = { signed_ext_alu_src1 * unsigned_ext_alu_src2};

wire [127:0] u_ext_mul_result = { unsigned_ext_alu_src1 * unsigned_ext_alu_src2 };