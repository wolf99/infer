(*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

open! IStd

(** Procnames for the builtin functions supported *)

include BUILTINS.S with type t = Procname.t

val is_declared : Procname.t -> bool

val __erlang_equal : Procname.t

val __erlang_exactly_equal : Procname.t

val __erlang_not_equal : Procname.t

val __erlang_exactly_not_equal : Procname.t

val __erlang_lesser : Procname.t

val __erlang_lesser_or_equal : Procname.t

val __erlang_greater : Procname.t

val __erlang_greater_or_equal : Procname.t

val __erlang_error_badkey : Procname.t

val __erlang_error_badmatch : Procname.t

val __erlang_error_badmap : Procname.t

val __erlang_error_badrecord : Procname.t

val __erlang_error_badreturn : Procname.t
(** Not a runtime error in Erlang. It means that the actual type disagrees with the spec. *)

val __erlang_error_case_clause : Procname.t

val __erlang_error_function_clause : Procname.t

val __erlang_error_if_clause : Procname.t

val __erlang_error_try_clause : Procname.t

val __erlang_make_atom : Procname.t

val __erlang_make_integer : Procname.t

val __erlang_make_cons : Procname.t

val __erlang_make_nil : Procname.t

val __erlang_make_tuple : Procname.t

val __erlang_make_map : Procname.t

val __erlang_make_str_const : Procname.t

val __erlang_make_bitstring : Procname.t

val __erlang_receive : Procname.t

val __erlang_str_equal : Procname.t

val __infer_initializer_list : Procname.t

val __infer_skip_function : Procname.t

val __infer_skip_gcc_asm_stmt : Procname.t

val __infer_structured_binding : Procname.t

val __infer_generic_selection_expr : Procname.t

val __atomic_fetch_max : Procname.t

val __atomic_fetch_min : Procname.t

val __atomic_fetch_nand : Procname.t

val __atomic_max_fetch : Procname.t

val __atomic_min_fetch : Procname.t

val __atomic_nand_fetch : Procname.t

val __c11_atomic_fetch_max : Procname.t

val __c11_atomic_fetch_min : Procname.t

val __call_objc_block : Procname.t

val __call_c_function_ptr : Procname.t

val __opencl_atomic_fetch_max : Procname.t

val __opencl_atomic_fetch_min : Procname.t

val __builtin_cxx_co_return : Procname.t

val __builtin_cxx_co_await : Procname.t

val __get_lazy_class : t
(** returns the a LazyClass representation of its arguement (a type name). A LazyClass represents a
    class that we know the name of but don't necessarily know if the class has been defined
    somewhere. *)

val __lazy_class_initialize : t
(** returns the singleton object associated with a given type, and performs lazily its
    initialization (only generated by the Hack frontend currently) *)

val dispatch_sync : Procname.t

val match_builtin : t -> 'a -> string -> bool
