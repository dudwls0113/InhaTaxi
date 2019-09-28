package com.inhataxi.activities.sign_up;

import android.content.Context;
import android.net.Uri;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.text.Html;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.inputmethod.InputMethodManager;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

import com.inhataxi.R;
import com.inhataxi.activities.BaseFragment;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static android.content.Context.INPUT_METHOD_SERVICE;
import static com.inhataxi.activities.sign_up.SignUpActivity.mViewPagerSignUp;


public class BasicInfoFragment extends BaseFragment {

    EditText mEditTextEmail;
    ImageView mImageViewDone;
    TextView mTextViewError, mTextViewTitle;
    InputMethodManager mInputMethodManager;
    int mIndex = 0;


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_basic_info, container, false);
        setComponentView(view);

        mEditTextEmail.setOnKeyListener(new View.OnKeyListener() {
            @Override
            public boolean onKey(View v, int keyCode, KeyEvent event) {
                if (keyCode == KeyEvent.KEYCODE_ENTER && event.getAction() == KeyEvent.ACTION_UP) {
                    mInputMethodManager.hideSoftInputFromWindow(mEditTextEmail.getWindowToken(), 0);
                    checkValidation();
                }
                return false;
            }
        });
        mImageViewDone.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                checkValidation();
            }
        });
        return view;
    }

    private void checkValidation(){
        if (!checkEmail(mEditTextEmail.getText().toString())) {
            mTextViewError.setVisibility(View.VISIBLE);
        } else {
            mTextViewError.setVisibility(View.INVISIBLE);
            mViewPagerSignUp.setCurrentItem(1);
        }
    }

    private boolean checkEmail(String email) {
        String regex = "^[_a-zA-Z0-9-\\.]+@[\\.a-zA-Z0-9-]+\\.[a-zA-Z]+$";
        Pattern p = Pattern.compile(regex);
        Matcher m = p.matcher(email);
        boolean isNormal = m.matches();
        return isNormal;
    }


    @Override
    public void setComponentView(View v) {
        mEditTextEmail = v.findViewById(R.id.basic_info_et_email);
        mImageViewDone = v.findViewById(R.id.basic_info_done);
        mTextViewError = v.findViewById(R.id.basic_info_tv_error);
        mTextViewTitle = v.findViewById(R.id.basic_info_tv_title);
        mInputMethodManager = (InputMethodManager) getActivity().getSystemService(INPUT_METHOD_SERVICE);
        mTextViewTitle.setText(Html.fromHtml("<b>이메일</b>을<br>입력해주세요."));
    }
}